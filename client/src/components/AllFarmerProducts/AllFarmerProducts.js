import './AllFarmerProducts.css'

function AllFarmerProducts({product, ondelete}){
    // console.log(product.id)
    // destructure products
    const {id, name, image_url, category, price} = product

    // console.log(id)

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


    return (
        <li class='card'>
            <img src={image_url} alt={name}  height='120px'/>
            <h4>{name}</h4>
            {/* <h4>{category}</h4> */}
            <p>Price: Ghc {price}</p>
            <button id='edit-product-btn'>Edit </button>

            <button id='delete-product-btn' onClick={showid}>Delete</button>


        </li>
    )
}

export default AllFarmerProducts