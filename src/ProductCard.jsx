import React from "react";
import { useState } from "react";
import EditProductCard from './EditProductCard';
import styled from 'styled-components';

function ProductCard ({id, name, price, description, deleteProduct, updateProduct}) {
    const [updatedProduct, setUpdatedProduct] = useState(false);

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        });
        deleteProduct(id);
    }

    const handleClick = () => {
        setUpdatedProduct(!updateProduct)
    }

    const Button = styled.button`
    color: white;
    background: royalblue;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: red;
    }
  `;

    return (
        <div>
            <div className="Product_card">
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <br></br>
            <br></br>
            <span>
                <Button className="update_button" onClick={handleClick}>Update</Button>
                <Button className="delete_button" onClick={handleDeleteClick}>Delete</Button>
            </span>

            {updatedProduct ? <EditProductCard updateProduct={updateProduct} id={id}/> : null}

            </div>
        </div>
    );
}


export default ProductCard;