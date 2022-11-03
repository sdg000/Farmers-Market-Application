import './LoginOptions.css'

function LoginOptions(){
    return(
        <div class="login-options" >
            <h1 class='login-options-header'>Choose your login option</h1>
            <a href="farmer-login" class="farmerlogin">Farmer Login </a> 
            <br/>
            <a href="customer-login" class="customerlogin">Customer Login </a>

        </div>

    )
}
export default LoginOptions