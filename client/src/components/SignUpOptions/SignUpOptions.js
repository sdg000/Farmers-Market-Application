import "./SignUpOptions.css"
// import {useState} from "react"

function SignupOptions(){

    // OPTION 2: display 2 buttons labelled "Signup as Farmer", "Signup as Customer", on click of each , render corresponding signup form

    return (
        <div class="card" >
            <img class="card-img-top" src="https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?cs=srgb&dl=pexels-scott-webb-305821.jpg&fm=jpg&_gl=1*rb5kl0*_ga*MTM3NTk3ODA0Ny4xNjY0NjU2ODIz*_ga_8JE65Q40S6*MTY2Njk4MTAyNy4zLjEuMTY2Njk4MTQ4MS4wLjAuMA.." alt="Card image cap"/>

            <div class="card-body">
                <h5 class="card-title">SIGN UP</h5>
                <p class="card-text">Are you a farmer looking to sell your produce ? Signup as Farmer</p>
                <br/>
                <p class="card-text">Are you a customer looking to buy or review produce ? Signup as Customer</p>
                <a href="farmer-signup" class="btn btn-primary" id="button1">Farmer Signup</a>
                <a href="customer-signup" class="btn btn-primary" id="button2">Customer Signup</a>
            </div>
        </div>
    )
}

export default SignupOptions