import React, { useState, useEffect } from 'react'

export default function AdminProductos() {
  const [productos, setProductos] = useState([])
  const [form, setForm] = useState({ nombre: '', precio: 0 })

  useEffect(() => {
    setProductos([{ id: 1, nombre: 'Mock Camiseta', precio: 20 }])
  }, [])

  const agregar = () => {
    setProductos([...productos, { id: Date.now(), ...form }])
    setForm({ nombre: '', precio: 0 })
  }

  const eliminar = id => {
    setProductos(productos.filter(p => p.id !== id))
  }

  return (
    <div>
      <h2>Admin - Productos</h2>
      <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
      <input placeholder="Precio" type="number" value={form.precio} onChange={e => setForm({ ...form, precio: +e.target.value })} />
      <button onClick={agregar}>Agregar</button>

      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - ${p.precio}
            <button onClick={() => eliminar(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
