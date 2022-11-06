import './AllFarmerProducts.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EditFarmerProduct from '../EditFarmerProduct/EditFarmerProduct'

function AllFarmerProducts({product, ondelete, onupdate}){
    let navigate = useNavigate()

    const [showEditForm, setShowEditForm] = useState(false)

    const {id, name, image_url, category, price} = product


    function showid(){
        // console.log(e.currentTarget)
        // console.log(id)
        fetch(`/api/products/${id}`, {
            method: "DELETE",
        }).then(function(response){
            if (response.ok){
                ondelete(id)
            }
        })
    }

    function handleEdit(){
        // console.log('returning')
        // return <EditFarmerProduct/>
        setShowEditForm(true)
        // navigate('/farmer/product/edit')
        console.log(id)
        console.log(name)
        console.log(image_url)
        

    }


    return (
        <>
            {showEditForm? 
                <EditFarmerProduct 
                    setShowEditForm={setShowEditForm}
                    id={id}
                    oldName={name}
                    oldCategory={category}
                    oldImage_url={image_url}
                    oldPrice={price}
                    onupdate={onupdate}
                />
                :
                <li class='card'>
                    <img src={image_url} alt={name}  height='120px'/>
                    <h4>{name}</h4>
                    {/* <h4>{category}</h4> */}
                    <p>Price: Ghc {price}</p>
                    <button id='edit-product-btn' onClick={handleEdit}>Edit </button>

                    <button id='delete-product-btn' onClick={showid}>Delete</button>


                </li>
            }
            
        </>
    )
}

export default AllFarmerProducts