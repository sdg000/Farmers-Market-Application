import './App.css';
import {useEffect, useState} from "react";
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





function App() {
  // const [isLoggedIn, setIsloggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  let navigate = useNavigate()

  // set isLoggedIn, setIslogged : to track user log in.....default(false)
  // if isloggedIn true, render NavBar with (user Props) to Display User info , 
  //   ...toggle isloggedIn on/off based on succesful user login (FarmerLogin and CustomerLogin)
  //     On succesful login, set isLoggedIn to true , pass user data to currentUser prop => back to App, use that to render Logged in NavBar or General NavBar
  
  // else render general NavBar showing all headers


  // autologin on Refresh
  useEffect(() => {
    fetch('/api/farmer-auth')
    .then(function(response){
      if (response.ok){
        return response.json()
        .then(function(data){
          // setIsloggedIn(true)
          setCurrentUser(data)
          // navigate('/farmer')

        })
      }else {
        navigate('/')
      }
    })

  }, [])

  function handleLogout(){
    setCurrentUser(null)
    // setIsloggedIn(false)
    navigate('/')
  }

  return (
    <>
      <div className="App">
        {/* {isLoggedIn?<UserNavBar currentUser={currentUser} onLogout={handleLogout}/>:<NavBar/>} */}
        {/* {isLoggedIn?null:<About/>} */}
        {currentUser? <UserNavBar currentUser={currentUser} onLogout={handleLogout} />:<NavBar/>}
        <Routes>
        <Route exact path='/' element={<ProductPage/>}>

        </Route>
        <Route exact path='login' element={<LoginOptions/>}>

        </Route>

        <Route exact path = "signup" element={<SignUpOptions/>}>

        </Route>
        <Route exact path='farmer-signup' element={<FarmerSignupForm/>} >

        </Route>

        <Route exact path='customer-signup' element={<CustomerSignUpForm/>}>

        </Route>
        <Route exact path='farmer-login' element={<FarmerLogin  setCurrentUser={setCurrentUser}/>}>

        </Route>
        <Route exact path='customer-login' element={<CustomerLogin/>}>

        </Route>
        <Route exact path='farmer' element={<FarmerPage currentUser={currentUser}/>}>

        </Route>










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
