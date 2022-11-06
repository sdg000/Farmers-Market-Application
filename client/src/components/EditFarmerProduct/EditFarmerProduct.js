import './EditFarmerProduct.css'
import {useState} from 'react'

function EditFarmerProduct({setShowEditForm, id, oldName, oldCategory, oldImage_url, oldPrice, onupdate}){

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState([])

    function closeEditForm(){
        setShowEditForm(false)
    }

    function handleEditProduct(e){
        e.preventDefault()

        fetch(`/api/products/${id}`, {
            method: "PATCH",
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
                    onupdate(data)
                    setShowEditForm(false)
                })
            }else {
                return response.json()
                .then(function(error){
                    setErrors(error.errors)
                })
            }
        })


    }

    return (
        <div class='product-edit-form'>
            <h1 id='edit-product-header'>Edit product</h1>
            <form  class='edit-form' onSubmit={handleEditProduct}>
                <div class='form-group'>
                    <label>Product Name</label>
                    <input
                        text='text'
                        class='form-control'
                        id='editname'
                        placeholder='Product name'
                        defaultValue={oldName}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div class='form-group'>
                    <label>Category</label>
                    <select id='editcategory' defaultValue={oldCategory} onChange={(e) => setCategory(e.target.value)} class='form-control'>
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
                        id='editimageurl'
                        type='text'
                        placeholder='enter product image url'
                        defaultValue={oldImage_url}
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
                        id='editInput'
                        placeholder='select price'
                        defaultValue={oldPrice}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button id='edit-submit-btn' type="submit">Submit</button>
                <button id='edit-cancel-btn' onClick={closeEditForm}>Cancel</button>

            </form>
            {errors?errors.map(e => <p id='edit-product-error' key={e} >{e}</p>):null}
        </div>
    )

    
}

export default EditFarmerProduct