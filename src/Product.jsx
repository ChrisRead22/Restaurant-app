import React from "react";
import ProductCard from './ProductCard'

const Product = ({products, addProduct, deleteProduct, updateProduct}) => {

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
            {allProducts}
        </div>
    )
}

export default Product;