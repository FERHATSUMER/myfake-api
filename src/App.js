import './App.css';
import { useEffect } from 'react';

function App() {

useEffect(()=>{
fetch("/user")
}, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
