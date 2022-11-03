import './FarmerSignUpForm.css'
import {useState} from "react"
import {useNavigate} from 'react-router-dom'


function FarmerSignUpForm(){
    let navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    function HandleSubmitFarmer(e){
        e.preventDefault()
        console.log(username)
        console.log(location)
        console.log(password)
        console.log(passwordConfirmation)


        fetch("/api/farmersignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                username,
                location,
                password,
                password_confirmation: passwordConfirmation,
            })
        })
        .then(function(response){
            if (response.ok){
                return response.json()
                .then(function(data){
                    navigate('/farmer-login')
                    console.log(data)
                })
            }else {
                return response.json()
                .then(function(error){
                    setErrors(error.errors)
                    console.log(errors)
                })
            }
        })

        setUsername('')
        setPassword('')
        setPasswordConfirmation('')


    }




    return (
        <div class='signup-farmer'>
            <h2 class='farmer-signup-header'>Sign up as a farmer</h2>
            <form onSubmit={HandleSubmitFarmer} class='farmer-signup-form'>
                <div class="form-group">
                    <label for="farmerUserName">Farmer Username</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="farmerUserName" 
                        aria-describedby="emailHelp" 
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="farmerLocation">Farmer location</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="farmerLocation" 
                        aria-describedby="emailHelp" 
                        placeholder="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div class="form-group">
                    <label for="farmerPassword">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="farmerPassword" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="farmerPasswordConfirmation">Confirm Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="farmerPasswordConfirmation" 
                        placeholder="Confirm Password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button type="submit" class="farmer-signup-button">Sign up</button>
            </form>
            {errors?errors.map(e => <p id='error' key={e} >{e}</p>):null}

        </div>


    )

}

export default FarmerSignUpForm