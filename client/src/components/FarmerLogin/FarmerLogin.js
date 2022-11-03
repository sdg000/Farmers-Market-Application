import './FarmerLogin.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function FarmerLogin({setCurrentUser, setIsloggedIn}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    let navigate = useNavigate()


    function farmerLogin(e){
        e.preventDefault()
        console.log(username)
        console.log(password)

        fetch('/api/farmerlogin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, 
                password,
            })
        })
        .then(function(response){
            if (response.ok){
                return response.json()
                .then(function(data){
                    setCurrentUser(data)
                    // setIsloggedIn(true)
                    navigate('/farmer')
                    console.log(data)
                })
            }else {
                return response.json()
                .then(function(error){
                    setErrors(error.errors)
                    console.log(error)
                })
            }
        })
    

        setUsername('')
        setPassword('')
    }

    function showPassword(){
        let pass = document.getElementById("farmerloginPassword")
        if (pass.type === "password") {
            pass.type = "text"
        }else {
            pass.type = "password"
        }
    }

    return (
        <div class='farmer-login'>
            <h1 class='farmer-login-header'>Farmer Login</h1>

            <form onSubmit={farmerLogin} class='farmer-login-form'>
            <div class="form-group">
                <label for="farmerUserName">Farmer Username</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="farmerloginUserName" 
                    aria-describedby="emailHelp" 
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div class="form-group">
                <label for="farmerloginPassword">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="farmerloginPassword" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input id='showfarmerPass' type="checkbox" onClick={showPassword}/>  Show Password

            </div>
            <button type="submit" class="farmer-login-btn">Login</button>
            </form>
            {errors?errors.map(e => <p id='farmer-login-error' key={e} >{e}</p>):null}

        </div>

    )
}

export default FarmerLogin