import './FarmerPage.css'
import {useState, useEffect} from 'react'
import AllFarmerProducts from '../AllFarmerProducts/AllFarmerProducts'
import FarmerCreateProductForm from '../FarmerCreateProductForm/FarmerCreateProductForm'
import FarmerAlert from '../FarmerAlert/FarmerAlert'

function FarmerPage({currentFarmer, displayFarmerProducts, setDisplayFarmerProducts}) {

    // function to filter out deleted product using product.id
    function removeDeletedPlant(id){
        const updatedProducts =  displayFarmerProducts.filter((product) => product.id !== id)
        setDisplayFarmerProducts(updatedProducts)
    }

    // function to handle updated product
    function handleUpdatedProduct(editedProduct){
        const updatedProducts = displayFarmerProducts.map((product) => {
            return product.id === editedProduct.id? editedProduct:product
        })
        setDisplayFarmerProducts(updatedProducts)

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
                        onupdate={handleUpdatedProduct}
                    />
                )
            }):null}



        </>

    )

}

export default FarmerPage