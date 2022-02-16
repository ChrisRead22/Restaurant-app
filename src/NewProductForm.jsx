import React, { useState } from "react";
import styled from 'styled-components';

function NewProductForm({addProduct}) {
    const [name, setName] = useState("");
    const [price, SetPrice] = useState("");
    const [description, SetDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                price: price,
                description: description
            }),
        })
        .then((r) => r.json())
        .then((newProduct) => addProduct(newProduct));
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
        <div className="new-Product-form">
            <h3>Create New Product</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Product price"
                    value={price}
                    onChange={(event) => SetPrice(event.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => SetDescription(event.target.value)}
                />

                <Button type="submit">Add Product</Button>

            </form>

        </div>
    );


}


export default NewProductForm;