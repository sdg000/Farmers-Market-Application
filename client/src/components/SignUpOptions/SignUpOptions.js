import "./SignUpOptions.css"
// import {useState} from "react"

function SignupOptions(){

    // OPTION 2: display 2 buttons labelled "Signup as Farmer", "Signup as Customer", on click of each , render corresponding signup form

    return (
        <div class='farmersignup'>
            {/* <h2>ffff</h2> */}
            <h1 class='signup-options-header'>Choose your prefered signup option</h1>

            <a href="farmer-signup" class="btn">Signup as Farmer </a> 
            <br/>
            <a href="customer-signup" class="btn11">Signup as Customer </a>

        </div>

    )
}

export default SignupOptions