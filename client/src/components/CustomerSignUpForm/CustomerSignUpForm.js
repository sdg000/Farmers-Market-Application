import './CustomerSignUpForm.css'
import {useState} from "react"

function CustomerSignUpForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  


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
        <div class="signup" id="customersignUp">
        <h2>Sign up as a customer</h2>
        <form onSubmit={HandleSubmitCustomer}>
            <div class="form-group">
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


            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        </div>
    )



    
}

export default CustomerSignUpForm