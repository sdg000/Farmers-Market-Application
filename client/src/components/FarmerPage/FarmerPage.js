import './FarmerPage.css'
import {useState, useEffect} from 'react'
import AllFarmerProducts from '../AllFarmerProducts/AllFarmerProducts'
import FarmerCreateProductForm from '../FarmerCreateProductForm/FarmerCreateProductForm'
import FarmerAlert from '../FarmerAlert/FarmerAlert'

function FarmerPage({currentFarmer, displayFarmerProducts, setDisplayFarmerProducts}) {
        // const [farmerProducts, setFarmerProducts] = useState(currentUser)

    // const {id, username, location, products} =  currentFarmer
    // const {id, username, location, products} =  displayFarmerProducts


    // const [allproducts, setProducts] = useState(products)

    // function to filter out deleted product using product.id
    function removeDeletedPlant(id){
        const productsMinustDeletedProduct =  displayFarmerProducts.filter((product) => product.id !== id)
        setDisplayFarmerProducts(productsMinustDeletedProduct)
    }



    return (
        <>
            {/* {currentUser.products?currentUser.products.map((product) => {
                return (
                    <AllFarmerProducts key={product.id} product={product}/>
                )
            }):null} */}

            {/* {allproducts?allproducts.map((product) => {
                return (
                    <AllFarmerProducts 
                        key={product.id} 
                        product={product}
                        ondelete={removeDeletedPlant}
                    />
                )
            }):null} */}

            {displayFarmerProducts?displayFarmerProducts.map((product) => {
                return (
                    <AllFarmerProducts 
                        key={product.id} 
                        product={product}
                        ondelete={removeDeletedPlant}
                    />
                )
            }):null}



        </>

    )

}

export default FarmerPage