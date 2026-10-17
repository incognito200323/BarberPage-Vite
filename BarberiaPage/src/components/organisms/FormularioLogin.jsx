import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormularioLogin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (usuario === "admin" && password === "1234") {
      alert("¡Bienvenido, Administrador!");
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas. Pista: admin / 1234");
    }
  };

  return (
    // Utilizamos tus clases login-cuerpo y login-main para centrar todo en la pantalla blanca
    <div className="login-cuerpo">
      <main className="login-main">
        <section className="formulario-login">
          
          {/* Asegúrate de tener tu logo guardado en public/imagenes/logo.jpg o .png */}
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
              ¿No tienes cuenta? <a href="#">Regístrate</a>
            </div>

          </form>
        </section>
      </main>
    </div>
  );
}