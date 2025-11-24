import React from "react";
import { Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Navbar from "./components/organisms/Navbar";
import ProtectedRoute from "./components/organisms/ProtectedRoute";
import "./styles.css";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Carrito from "./pages/Carrito";
import FinalizarCompra from "./pages/FinalizarCompra";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Perfil from "./pages/Perfil";
import AdminHome from "./pages/admin/AdminHome";
import AdminProductos from "./pages/admin/AdminProductos";

function App() {
  return (
    <CarritoProvider>
      <div className="App">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/finalizar-compra" element={<FinalizarCompra />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/productos"
              element={
                <ProtectedRoute role="admin">
                  <AdminProductos />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Routes>
        </main>

        <footer>
          &copy; 2025 Suburbia. Todos los derechos reservados.
        </footer>

      </div>
    </CarritoProvider>
  );
}

export default App;
