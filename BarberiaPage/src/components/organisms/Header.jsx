import { Link } from 'react-router-dom';

export default function Header({ esAdmin, sesionIniciada, onLogout }) {
  return (
    <header id="header">
      <div className="titulo">Glow Up</div>
      <nav className="nav-header">
        <Link to="/" className="nav-inicio">Inicio</Link>
        {esAdmin ? (
          <div>
            <Link to="/admin" className="btn-header">Panel Admin</Link>
          </div>
        ) : (
          <div>
            <Link to="/reserva" className="btn-header">Reserva Tu hora</Link>
          </div>
        )}
        {sesionIniciada || esAdmin ? (
          <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }}>
            Cerrar Sesión
          </a>
        ) : (
          <Link to="/login">Inicio de sesión</Link>
        )}
        
      </nav>
    </header>
  );
}