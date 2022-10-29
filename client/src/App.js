import './App.css';
import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About';
import ProductPage from './components/ProductPage/ProductPage';
import SignUpOptions from './components/SignUpOptions/SignUpOptions';
import Login from './components/Login/Login';
import FarmerSignupForm from './components/FarmerSignUp/FarmerSignUpForm'
import CustomerSignUpForm from './components/CustomerSignUpForm/CustomerSignUpForm'





function App() {

  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Routes>
      <Route exact path='/' element={<ProductPage/>}>

      </Route>
      <Route exact path='login' element={<Login/>}>

      </Route>

      <Route exact path = "signup" element={<SignUpOptions/>}>

      </Route>
      <Route exact path='farmer-signup' element={<FarmerSignupForm/>} >

      </Route>

      <Route exact path='customer-signup' element={<CustomerSignUpForm/>}>

      </Route>







      </Routes>

    </div>
  )
}

export default App;
