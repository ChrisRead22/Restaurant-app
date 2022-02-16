import React from "react";
import ProductCard from './ProductCard';
import NewProductForm from './NewProductForm';

const Product = ({products, addProduct, deleteProduct, updateProduct={updateProduct}}) => {

    const allProducts = products.map(product => {
        return <ProductCard
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
        />
    })

    return (
        <div>
         <NewProductForm addProduct={addProduct}/>
         <br></br>
        <h1>All Products</h1>
            {allProducts}
        </div>
    )
}

export default Product;