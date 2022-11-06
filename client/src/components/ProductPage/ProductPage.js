import './ProductPage.css'
// import ProductPageCarousel from '../ProductPageCarousel/ProductPageCarousel'

function ProductPage({allProducts}){
    console.log(allProducts)

    return (
        <div class="mainpage">

            {/* <ProductPageCarousel allProducts={allProducts}/> */}

            {allProducts?allProducts.map((product) => {
                return (
                    <li key={product.id} class='allproducts'>
                        <img src={product.image_url} alt={product.name} height='120px'/>
                        <h4>{product.name}</h4>
                        <p>Price: Ghc: {product.price}</p>
                        <button id='buy-product-btn'>Buy</button>


                    </li>
                )
            }):null}

        </div>

        
        



    )
}
export default ProductPage

