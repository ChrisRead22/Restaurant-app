import React from "react";
import ProductCard from './ProductCard';
import NewProductForm from './NewProductForm';
import styled from 'styled-components'

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

    const StyledContainer = styled.div`
        max-width: 550px;
        width: 100%;
        margin: auto;
        border: 5px solid black;
        padding: 10px 10px 10px;
    `;

    return (
        <div>
         <NewProductForm addProduct={addProduct}/>
         <br></br>
        <h1>All Products</h1>
        <StyledContainer>{allProducts}</StyledContainer>
        </div>
    )
}

export default Product;