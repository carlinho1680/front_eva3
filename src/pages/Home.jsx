import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Suburbia</h1>
      <p>Explora nuestros productos</p>
      <Link to="/productos">Ver productos</Link>
    </div>
  )
}
