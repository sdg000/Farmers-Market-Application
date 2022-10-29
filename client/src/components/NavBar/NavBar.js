import './NavBar.css'

function NavBar(){
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="signup">Signup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    )
}

export default NavBar