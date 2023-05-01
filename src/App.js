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

  return (
    <div className="App">
      <button onClick={login}>login</button>
    </div>
  );
}

export default App;
