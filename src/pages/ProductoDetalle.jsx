import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductoDetalle() {
  const { id } = useParams()
  return (
    <div>
      <h2>Detalle del producto {id}</h2>
      <button onClick={() => alert('Agregado al carrito')}>Agregar al carrito</button>
    </div>
  )
}
