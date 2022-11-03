import './FarmerPage.css'
import {useState, useEffect} from 'react'
import AllFarmerProducts from '../AllFarmerProducts/AllFarmerProducts'
import FarmerCreateProductForm from '../FarmerCreateProductForm/FarmerCreateProductForm'

function FarmerPage({currentUser}) {

    // click tracker to show all farmer products
    // const [showProductsBtnClicked, setshowProductsBtnClicked] = useState(false)
    // const [createProductsBtnClicked, setCreateProductsBtnClicked] = useState(false)
    const [action, setAction] = useState(false)

    // useEffect(()=>{
    //     if (createProductsBtnClicked){
    //         setshowProductsBtnClicked(false)
    //     }

    // }, [])

    // if (createProductsBtnClicked){
    //     setshowProductsBtnClicked(false)
    // }
    function cxxity(){
        console.log("city")
        // return <AllFarmerProducts/>
    }

    // if (showProductsBtnClicked){
    //     setCreateProductsBtnClicked(false)
    // }else if (setCreateProductsBtnClicked){
    //     setshowProductsBtnClicked(false)
    // }else {
    //     setCreateProductsBtnClicked(true)
    // }



    return (
        // <p>farmer page</p>
        // <div class='famerpage'>
        //     {/* <p>{currentUser.username}</p>
        //     <p>{currentUser.location}</p>
        //     <p>This is farmers page</p> */}

        //     <div class="sidenav">
        //         <a href='about'>My Products</a>
        //         <a href='services'>Post Product</a>
        //         <a href='#'> Action 1</a>
        //         <a href='#'> Action 2</a>
        //         <a href='#'> Action 3</a>
        //         <a href='#'> Action 4</a>
                



        //     </div>
        //     <div class='main'>
        //         <p>{currentUser.location}</p>



        //     </div>

        // </div>


        <>
            {/* display component on condition and pass the currentUser to it */}

            {action?<FarmerCreateProductForm currentUser={currentUser}/>:<AllFarmerProducts currentUser={currentUser}/>}
            
            {/* {createProductsBtnClicked?<FarmerCreateProductForm/>:null} */}
            <div class="tab">
                <input class="form-control mr-sm-2" id='search' type="search" placeholder="Search product" aria-label="Search"/>
                <button class="tablinks" onClick={()=> setAction(false)}>My Products</button>
                <button class="tablinks" onClick={() => setAction(true)}>Post New Product</button>
            </div>

            {/* <div id="London" class="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" class="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" class="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div> */}
        </>

    )

}

export default FarmerPage