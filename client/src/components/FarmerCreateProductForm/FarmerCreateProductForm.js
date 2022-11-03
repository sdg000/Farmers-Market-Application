import ProductPage from '../ProductPage/ProductPage'
import './FarmerCreateProductForm.css'
import {useState} from 'react'

function FarmerCreateProductForm({currentUser}){

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([])

    // function to handle creating ProductPage
    function handleCreateProduct(e){
        e.preventDefault()
        console.log(category)
        console.log(name)
        console.log(price)

        // fetch('/api/')

    }



    return (
        <div class='container-fluid'>
            <h1 class='newproducterror-header'>Post new product</h1>
            <form onSubmit={handleCreateProduct} class='newproduct'>
                <div class='form-group'>
                    <label>Product Name</label>
                    <input
                        text='text'
                        class='form-control'
                        id='newproductname'
                        placeholder='Product name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
                </div>
                <div class='form-group'>
                    <label>Category</label>
                    <input
                        text='text'
                        class='form-control'
                        id='newproductcategory'
                        placeholder='Category'
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                        required
                    />
                </div>

                <div class='form-group'>
                    <label>Image url</label>
                    <input
                        class='form-control'
                        id='newproductimageurl'
                        type='text'
                        placeholder='enter product image url'
                        value={image_url}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>

                <div class='form-group'>
                    <label>Price</label>
                    <input
                        type='number'
                        min='0'
                        step='1'
                        class='form-control'
                        id='amountInput'
                        placeholder='select price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button id='post-new-product-btn' type="submit">Submit</button>


            </form>


        </div>
    )
}
export default FarmerCreateProductForm