import React, {useState} from "react";
import styled from 'styled-components';

const EditProductCard = ({updateProduct, id}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
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
        .then((updatedProduct) =>{
            updateProduct(updatedProduct)
        });

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

    return(
        <div className="edit">
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
                    placeholder="Price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};









export default EditProductCard;