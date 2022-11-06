import React from 'react'
import './UserNavBar.css'
import {useNavigate} from "react-router-dom"

function UserNavBar({currentFarmer, onLogout}){

    let navigate = useNavigate()

    function logout(){
        console.log("logout")
        fetch("/api/farmerlogout", {
            method: "DELETE"
        }).then(() => onLogout())

    }

    function newProduct(){
        navigate('/farmer/new-product')
    }

    function goToFarmerPage(){
        navigate('/farmer-page')
    }

    function gotoProductsPage(){
        navigate('/')

    }



    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
        <a class="navbar-brand" id='navbar-brand' href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0hCmhn0Qm3Qd5oTot0UVRX1bFPt4BCQ3QA&usqp=CAU" width="60" height="60" alt="xx"/>
            Farmers Market
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" onClick={gotoProductsPage} id='gotoProductsPage'>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={goToFarmerPage} id='gotofarmerpage'>My Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id='postnewproduct' onClick={newProduct}>Post Product</a>
                </li>
            </ul>
            <a id="nav-link" onClick={logout}>Signout</a>
            <h4 id='username'>{currentFarmer.username}</h4>
        </div>
    </nav>
    )
}

export default UserNavBar