import './FarmerPage.css'

function FarmerPage({currentUser}) {

    return (
        // <p>farmer page</p>
        <div>
            <p>{currentUser.username}</p>
            <p>{currentUser.location}</p>
            <p>This is farmers page</p>

        </div>
    )

}

export default FarmerPage