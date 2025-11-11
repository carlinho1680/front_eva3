import React from "react";

const productos = [
  { id: 1, nombre: "Producto 1", precio: 120 },
  { id: 2, nombre: "Producto 2", precio: 250 },
  { id: 3, nombre: "Producto 3", precio: 75 },
];

export default function Productos() {
  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Productos</h2>
      <div className="product-grid">
        {productos.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}
