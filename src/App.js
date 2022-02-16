import React, {useState,useEffect} from "react"
import Product from "./Product";
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(r => r.json())
    .then((productArray) => {
      setProducts(productArray);
    })
  }, []);

  function addProduct(newProduct) {
    const updatedProductArray = [...products, newProduct];
    setProducts(updatedProductArray);
  }

  function deleteProduct(id) {
    const updatedProductArray = products.filter((product) => product.id !== id);
    setProducts(updatedProductArray);
  }

  function updateProduct(updatedProduct) {
    const updatedProductArray = products.map((product) => {
      if (product.id == updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setProducts(updatedProductArray);
  }

  return (
    <div className="App">
     <Router>
       

         <Route path="/Product" render={(props) => <Product
         products={products}
         addProduct={addProduct}
         deleteProduct={deleteProduct}
         updateProduct={updateProduct}
         props={props}/>}>

         </Route>

       
     </Router>
    </div>
  );
}

export default App;
