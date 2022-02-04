import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setMensaje('Hola Mundo😎');
  }, []);
  return (
    <>
      <h1>Hola Mundo😎xd</h1>
      <p>{mensaje}</p>
    </>
  )

}





export default App;
