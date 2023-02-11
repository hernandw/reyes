import React, { useState } from "react";
import { datos } from "./assets/datos.js";
import "./assets/css/style.css";

const App = () => {
  const [productos, setProductos] = useState(datos);
  console.log(productos);
  return (
    <>
      <h2>Render de Datos</h2>
      <section>
        {productos.map((item) => (
          <div className="fondo" key={item.id}>
            <p>{item.producto}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default App;
