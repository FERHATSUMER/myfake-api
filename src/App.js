import { useEffect, useState } from "react";

import "./App.css";


function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/user");

    loadProducts();
  }, []);

  const login = async () => {
    const response = await fetch("/login", {
      method: "POST",
    });

    const responseJson = response.json();

    console.log(responseJson);
  };

  const loadProducts = async () => {
    setLoading(true);

    const response = await (await fetch("/products?limit=10")).json();
    setProducts(response.data);

    setLoading(false);
  };

  return (
    <div className="App">
      <button onClick={login}>login</button>

      {loading && <div>loading...</div>}

      {products.map((product) => (
        <div>
          <img
            style={{ width: "250px" }}
            src={product.imageUrl}
            alt={product.title}
          />
          <div>
            {product.title} - {product.price}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;