import { useState, useEffect } from 'react';

export default function FormularioReserva() {
  // Estados para guardar los precios y servicios extra
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

  // Función para manejar el envío del formulario (evita que la página se recargue)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Reserva confirmada con éxito!");
  };

  return (
    <section className="formulario-seccion">
      <h2>Reserva de horas</h2>
      <form onSubmit={handleSubmit} className="form-reserva">
        
        <div className="campo">
          <label htmlFor="nombre">NOMBRE COMPLETO</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre y apellido" required />
        </div>

        <div className="campo">
          <label htmlFor="telefono">NÚMERO DE TELÉFONO</label>
          <input type="tel" id="telefono" name="telefono" placeholder="+56 9 1234 5678" required />
        </div>

        <div className="campo">
          <label htmlFor="servicio">SERVICIO</label>
          <select id="servicio" name="servicio" required defaultValue="">
            <option value="" disabled>Seleccioná un servicio</option>
            <option value="corte">Corte de Pelo - \${precioPelo}</option>
            <option value="corte-barba">Corte de Pelo + Barba - \${precioBarba}</option>
            
            {serviciosExtra.map((servicio, index) => (
              <option key={index} value={`extra_${index}`}>
                {servicio.nombre} - \${servicio.precio}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="fecha">FECHA DE RESERVA</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>

        <div className="campo">
          <label htmlFor="comentarios">COMENTARIOS EXTRAS</label>
          <textarea id="comentarios" name="comentarios" rows="3" placeholder="detalles adicionales..."></textarea>
        </div>

        <button type="submit" className="btn-confirmar">CONFIRMAR RESERVA</button>
      </form>
    </section>
  );
}