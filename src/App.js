import React from "react";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import products from "./products.json"
import "./App.css"


function App() {
  return (
    <>
      <div className="App">
        <Cart />
        <div className="products">
          {
            products.map((element) => (
              <Product {...element} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
