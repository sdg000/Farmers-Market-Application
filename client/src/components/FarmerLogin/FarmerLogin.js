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

    return (
        <div class="bg-img">
            <form class="farmer-login" onSubmit={farmerLogin}>
                <h1>Farmer Login</h1>
                <label>Username</label>
                <input 
                    type="text" 
                    // class="form-control" 
                    // id="farmerUserName" 
                    // aria-describedby="emailHelp" 
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br/>
                <label>Password</label>
                <input 
                    type="password" 
                    // class="form-control" 
                    // id="farmerUserName" 
                    // aria-describedby="emailHelp" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" class="login-btn">Login</button>
                {errors?errors.map(e => <p id='login-error' key={e} >{e}</p>):null}

            </form>

        </div>
    )
}

export default FarmerLogin