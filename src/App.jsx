import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <header>Suburbia</header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>

      <footer>&copy; 2025 Suburbia. Todos los derechos reservados.</footer>
    </BrowserRouter>
  );
}

export default App;
