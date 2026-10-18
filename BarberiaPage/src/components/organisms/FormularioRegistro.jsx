import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function FormularioRegistro({ setSesionIniciada }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
// 1. Validar nombre/usuario
    if (nombre.trim().length < 3) {
      alert("Por favor, ingresa un nombre o usuario válido (mínimo 3 caracteres).");
      return;
    }

    // 2. Validar formato de correo estricto
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regexCorreo.test(email.trim())) {
      alert("Ingresa un correo electrónico válido (ejemplo: cliente@correo.com).");
      return;
    }

    // 3. Validar contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Si todo está correcto, procede a guardar/registrar
    alert("¡Cuenta registrada con éxito!");
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