import './CustomerSignUpForm.css'
import {useState} from "react"

function CustomerSignUpForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])
  


    function HandleSubmitCustomer(e){
        e.preventDefault()
        console.log(username)
        console.log(password)
        console.log(passwordConfirmation)
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')

        // document.getElementById("myForm").reset()



    }

    return (
        <div class='customersignup'>
                    <h2 class='customer-signup-header'>Sign up as a customer</h2>
        <form class='customer-signup-form' onSubmit={HandleSubmitCustomer}>
            <div class="customer-form-group">
                <label for="customerUserName">Customer Username</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="customerUserName" 
                    aria-describedby="emailHelp" 
                    placeholder="customer username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="farmerPassword">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="customerPassword" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="customerPasswordConfirmation">Confirm Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="customerPasswordConfirmation" 
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>


            <button type="submit" class="customer-signup-button">Submit</button>
        </form>
        {errors?errors.map(e => <p id='customer-signup-error' key={e} >{e}</p>):null}


        </div>
    )



    
}

export default CustomerSignUpForm