import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/user");
  }, []);

  const login = async () => {
    const response = await fetch("/login", {
      method: "POST",
    });

    const responseJson = response.Json();
    console.log(responseJson);
  };

  const loadProducts = async()=>{
    const response =await(await fetch("/products")).json();
    console.log(response)
  }

  return (
    <div className="App">
      <button onClick={login}>login</button>
    </div>
  );
}

export default App;
