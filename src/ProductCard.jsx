import React from "react";
import { useState } from "react";

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

    return (
        <div>
            <div className="Product_name">
            <h3>{name}</h3>
            
            </div>
        </div>
    );
}


export default ProductCard;