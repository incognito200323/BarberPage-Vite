import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function FormularioRegistro({ setSesionIniciada }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    alert(`¡Cuenta creada con éxito para ${nombre}!`);
    if (setSesionIniciada) setSesionIniciada(true); 
    navigate("/"); 
  };

  return (
    <div className="login-cuerpo">
      <main className="login-main">
        <section className="formulario-login">
          <img src="/Imagenes/Foto-Inicio.webp" alt="Logo Glow Up Barbería" />
          
          <h2>Crear Cuenta</h2>
          
          <form onSubmit={handleRegistro}>
            <div className="login-campo">
              <label htmlFor="nombre">Nombre Completo</label>
              <input 
                type="text" 
                id="nombre" 
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required 
              />
            </div>

            <div className="login-campo">
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="login-campo">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Crea una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn-login" style={{ marginTop: '20px' }}>
              Registrarse
            </button>

            <div className="registro-login">
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}