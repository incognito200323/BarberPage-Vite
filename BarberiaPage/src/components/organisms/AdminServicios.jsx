import { useState } from 'react';

export default function AdminServicios() {
  const [nombreServicio, setNombreServicio] = useState("");
  const [precioServicio, setPrecioServicio] = useState("");

  const agregarServicio = (e) => {
    e.preventDefault();
    const nombre = nombreServicio.trim();
    const precio = precioServicio.trim();

    if (!nombre || !precio) {
      return alert("Por favor, ingresa el nombre y el precio del servicio.");
    }

    const serviciosExtra = JSON.parse(localStorage.getItem("serviciosExtra")) || [];
    serviciosExtra.push({ nombre, precio });
    localStorage.setItem("serviciosExtra", JSON.stringify(serviciosExtra));

    alert(`Servicio "${nombre}" agregado exitosamente por $${precio}.`);

    setNombreServicio("");
    setPrecioServicio("");
  };

  return (
    <section className="formulario-seccion">
      <h2>Agregar Nuevo Servicio</h2>
      <form onSubmit={agregarServicio} className="form-reserva">
        
        <div className="campo">
          <label htmlFor="nombreServicio">Nombre del Servicio</label>
          <input 
            type="text" 
            id="nombreServicio" 
            placeholder="Ej: Perfilado de Cejas" 
            value={nombreServicio} 
            onChange={(e) => setNombreServicio(e.target.value)} 
            required 
          />
        </div>
        
        <div className="campo">
          <label htmlFor="precioServicio">Precio del Servicio (\$)</label>
          <input 
            type="number" 
            id="precioServicio" 
            placeholder="Ej: 5000" 
            value={precioServicio} 
            onChange={(e) => setPrecioServicio(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" className="btn-confirmar">AGREGAR SERVICIO</button>
      </form>
    </section>
  );
}