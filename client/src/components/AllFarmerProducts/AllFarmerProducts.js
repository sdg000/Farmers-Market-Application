import './AllFarmerProducts.css'

function AllFarmerProducts({currentUser}){
    return (
        <div class='allfarmerproducts'>
            {/* iterate through all products for particular user and display */}
            <p id='xx'>{currentUser.username}</p>

        </div>

    )
}

export default AllFarmerProducts