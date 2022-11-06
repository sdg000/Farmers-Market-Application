import './App.css';
import {startTransition, useEffect, useState, useSyncExternalStore} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import UserNavBar from './components/UserNavBar/UserNavBar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ProductPage from './components/ProductPage/ProductPage';
import SignUpOptions from './components/SignUpOptions/SignUpOptions';
import LoginOptions from './components/Login/LoginOptions';
import FarmerSignupForm from './components/FarmerSignUp/FarmerSignUpForm'
import CustomerSignUpForm from './components/CustomerSignUpForm/CustomerSignUpForm'
import FarmerLogin from './components/FarmerLogin/FarmerLogin'
import CustomerLogin from './components/CustomerLogin/CustomerLogin'
import FarmerPage from './components/FarmerPage/FarmerPage';
import FarmerAlert from './components/FarmerAlert/FarmerAlert';
import FarmerCreateProductForm from './components/FarmerCreateProductForm/FarmerCreateProductForm';





function App() {

  //saving useNavigate to variable
  let navigate = useNavigate()


  //keeping track of current loggedin Farmer
  const [currentFarmer, setCurrentFarmer] = useState('')

  //keeping track of current users posted products for Display purposes
  const [displayFarmerProducts, setDisplayFarmerProducts] = useState([])

  //keeping track of all Products
  const [allProducts, setAllProducts] = useState([])




  // autologin on Refresh
  useEffect(() => {
    fetch('/api/farmer-auth')
    .then(function(response){
      if (response.ok){
        return response.json()
        .then(function(data){
          // setIsloggedIn(true)
          setCurrentFarmer(data)
          if (data.products.length > 0){
            setDisplayFarmerProducts(data.products)
            navigate('/farmer-page')

          }else {
            navigate('/new-farmer')
          }

        })
      }else {
        navigate('/')
      }
    })

    // On App start, fetch all products for display in <ProductPage/>
    fetch('/api/products')
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      setAllProducts(data)
    })


  }, [])

  function handleLogout(){
    setCurrentFarmer(null)
    navigate('/')
  }

  return (
    <>
      <div className="App">
        {currentFarmer? <UserNavBar currentFarmer={currentFarmer} onLogout={handleLogout} />:<NavBar/>}
        {/* <About/> */}
        <Routes>
        <Route exact path='/' element={<ProductPage allProducts={allProducts}/>}>

        </Route>
        <Route exact path='login' element={<LoginOptions/>}>

        </Route>

        <Route exact path = "signup" element={<SignUpOptions/>}>

        </Route>
        <Route exact path='farmer-signup' element={<FarmerSignupForm/>} >

        </Route>

        <Route exact path='customer-signup' element={<CustomerSignUpForm/>}>

        </Route>
        <Route exact path='farmer-login' element={<FarmerLogin  setCurrentFarmer={setCurrentFarmer} currentFarmer={currentFarmer} setDisplayFarmerProducts={setDisplayFarmerProducts}/>}>

        </Route>
        <Route exact path='customer-login' element={<CustomerLogin/>}>

        </Route>
        <Route exact path='farmer-page' element={<FarmerPage currentFarmer={currentFarmer} displayFarmerProducts={displayFarmerProducts} setDisplayFarmerProducts={setDisplayFarmerProducts}/>}>

        </Route>

        <Route exact path='new-farmer' element={<FarmerAlert currentFarmer={currentFarmer}/>}>

        </Route>
        <Route exact path='farmer/new-product' element={<FarmerCreateProductForm currentFarmer={currentFarmer}/>}>

        </Route>
        {/* <Route exact path='' element={<FarmerPage currentUser={currentUser}/>}>

        </Route> */}















        </Routes>
        {/* <Footer/> */}


      </div>
      <Footer>
        <p>this is footer</p>
      </Footer>
    </>
    
  )
}

export default App;
