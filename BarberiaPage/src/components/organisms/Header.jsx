// src/components/organisms/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      {/* Título de la barbería que al hacer clic lleva al inicio */}
      <Link to="/" className="titulo">Glow Up</Link>
      
      {/* Menú de navegación */}
      <nav className="nav-header">
        <Link to="/">Inicio</Link>
        <Link to="/reserva">Reservar Horas</Link>
        <Link to="/admin">Panel Admin</Link>
      </nav>
    </header>
  );
}