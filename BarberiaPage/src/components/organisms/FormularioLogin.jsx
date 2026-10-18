import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function FormularioLogin({ setEsAdmin, setSesionIniciada }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === "admin" && password === "1234") {
      alert("¡Bienvenido, Administrador!");
      setEsAdmin(true); 
      setSesionIniciada(true); 
      navigate("/"); 
    } else {
      alert("Credenciales incorrectas. Pista: admin / 1234");
    }
  };

  return (
    <div className="login-cuerpo">
      <main className="login-main">
        <section className="formulario-login">
          <img src="/Imagenes/Foto-Inicio.webp" alt="Logo Glow Up Barbería" />
          
          <h2>Inicio de sesión</h2>
          
          <form onSubmit={handleLogin}>
            
            <div className="login-campo">
              <label htmlFor="usuario">Correo Electrónico o Usuario</label>
              <input 
                type="text" 
                id="usuario" 
                placeholder="Email o nombre de usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required 
              />
            </div>

            <div className="login-campo">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <div className="opciones-login">
              <a href="#" className="contraseña">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="btn-login">Iniciar sesión</button>

            <div className="registro-login">
              ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}