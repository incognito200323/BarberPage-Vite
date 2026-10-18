import { useState, useEffect } from 'react';

export default function FormularioReserva() {
  // 1. Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [comentarios, setComentarios] = useState("");

  // 2. Estados para guardar los precios y servicios extra desde localStorage
  const [precioPelo, setPrecioPelo] = useState("10000");
  const [precioBarba, setPrecioBarba] = useState("15000");
  const [serviciosExtra, setServiciosExtra] = useState([]);

  useEffect(() => {
    const pPelo = localStorage.getItem("precioPelo") || "10000";
    const pBarba = localStorage.getItem("precioBarba") || "15000";
    const extras = JSON.parse(localStorage.getItem("serviciosExtra")) || [];

    setPrecioPelo(pPelo);
    setPrecioBarba(pBarba);
    setServiciosExtra(extras);
  }, []); 

  // 3. Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar nombre
    if (nombre.trim().length < 3) {
      alert("Por favor, ingresa un nombre válido para la reserva (mínimo 3 caracteres).");
      return;
    }

    // Validar correo electrónico estricto (bloquea ...@..)
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regexCorreo.test(email.trim())) {
      alert("Ingresa un correo electrónico válido (ejemplo: cliente@correo.com).");
      return;
    }

    // Validar teléfono (mínimo 8 dígitos)
    const soloNumeros = telefono.replace(/\D/g, '');
    if (soloNumeros.length < 8) {
      alert("Ingresa un número de teléfono válido (mínimo 8 dígitos).");
      return;
    }

    // Validar servicio, fecha y hora
    if (!servicio) {
      alert("Por favor, selecciona un servicio.");
      return;
    }
    if (!fecha || !hora) {
      alert("Por favor, selecciona la fecha y la hora para tu reserva.");
      return;
    }

    // Confirmación exitosa
    alert(`¡Reserva confirmada con éxito a nombre de ${nombre} para el ${fecha} a las ${hora}!`);

    // Limpiar formulario
    setNombre("");
    setEmail("");
    setTelefono("");
    setServicio("");
    setFecha("");
    setHora("");
    setComentarios("");
  };

  return (
    <section className="formulario-seccion">
      <h2>Reserva de horas</h2>
      <form onSubmit={handleSubmit} className="form-reserva">
        
        <div className="campo">
          <label htmlFor="nombre">NOMBRE COMPLETO</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Tu nombre y apellido" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required 
          />
        </div>

        <div className="campo">
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="ejemplo@correo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="campo">
          <label htmlFor="telefono">NÚMERO DE TELÉFONO</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono" 
            placeholder="+56 9 1234 5678" 
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required 
          />
        </div>

        <div className="campo">
          <label htmlFor="servicio">SERVICIO</label>
          <select 
            id="servicio" 
            name="servicio" 
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona un servicio</option>
            <option value="corte">Corte de Pelo - \${precioPelo}</option>
            <option value="corte-barba">Corte de Pelo + Barba - \${precioBarba}</option>
            
            {serviciosExtra.map((item, index) => (
              <option key={index} value={`extra_${index}`}>
                {item.nombre} - \${item.precio}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="fecha">FECHA DE RESERVA</label>
          <input 
            type="date" 
            id="fecha" 
            name="fecha" 
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required 
          />
        </div>

        <div className="campo">
          <label htmlFor="hora">HORA DE RESERVA</label>
          <input 
            type="time" 
            id="hora" 
            name="hora" 
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required 
          />
        </div>

        <div className="campo">
          <label htmlFor="comentarios">COMENTARIOS EXTRAS</label>
          <textarea 
            id="comentarios" 
            name="comentarios" 
            rows="3" 
            placeholder="detalles adicionales..."
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn-confirmar">CONFIRMAR RESERVA</button>
      </form>
    </section>
  );
}