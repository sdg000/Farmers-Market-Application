import './FarmerPage.css'
import {useState, useEffect} from 'react'
import AllFarmerProducts from '../AllFarmerProducts/AllFarmerProducts'
import FarmerCreateProductForm from '../FarmerCreateProductForm/FarmerCreateProductForm'
import FarmerAlert from '../FarmerAlert/FarmerAlert'

function FarmerPage({currentUser}) {
    // const [userWithProducts, setUserWithProducts] = useState(currentUser.products)

    // const [action, setAction] = useState(false)

    // destructuring {currentUser}
    // if (currentUser){
    //     const {id, username, location, products} = currentUser

    // }

    // currentUser.products.map((product) => {
    //     <AllFarmerProducts key={product.id} product={product}/>
    // })





    // if (products){
    //     products.map((product) => {
    //         <AllFarmerProducts key={product.id} product={product}/>
    //     })
    // }




    // console.log(currentUser.products)

    // function sendFarmerProducts(){
    //     if (products){
    //         products.map((product) => {
    //             <AllFarmerProducts
    //             key={product.id}
    //             product={product}

                
    //         />

    //         })
    
    //     }

    // }



    return (
        <>
            {currentUser.products?currentUser.products.map((product) => {
                return (
                    <AllFarmerProducts key={product.id} product={product}/>
                )
            }):null}

        </>

    )

}

export default FarmerPage