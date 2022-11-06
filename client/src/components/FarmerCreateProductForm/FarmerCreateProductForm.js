import ProductPage from '../ProductPage/ProductPage'
import './FarmerCreateProductForm.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function FarmerCreateProductForm({currentUser}){
    let navigate = useNavigate()

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([])


    // close new product form
    function closeEditForm(){
        // setCloseNewProductForm(false)
        navigate('/farmer-page')
    }


    // function to handle creating ProductPage
    function handleCreateProduct(e){
        e.preventDefault()

        fetch('/api/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                category,
                image_url,
                price,
            })
        })
        .then(function(response){
            if (response.ok){
                return response.json()
                .then(function(data){
                    console.log(data)
                })
            }else {
                return response.json()
                .then(function(error){
                    setErrors(error.errors)
                })
            }
        })
        setName('')
        setCategory('')
        setImageUrl('')
        setPrice('')

    }



    return (
        <div class='container-fluid'>
            <h1 id='create-new-product-header'>Post new product</h1>
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
                    />
                </div>
                <div class='form-group'>
                    <label>Category</label>
                    <select id='newproductcategory' value={category} onChange={(e) => setCategory(e.target.value)} class='form-control'>
                        <option id='categoryoptions'>select product category</option>
                        <option>Vegetable</option>
                        <option>Cereal</option>
                        <option>Livestock</option>
                        <option>Fruit</option>
                        <option>Tuber</option>
                        <option>Food</option>
                        <option>Diary</option>


                    </select>

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
                <button id='cancel-post-new-btn' onClick={closeEditForm}>Cancel</button>

            </form>
            {errors?errors.map(e => <p id='new-product-error' key={e} >{e}</p>):null}


        </div>
    )
}
export default FarmerCreateProductForm