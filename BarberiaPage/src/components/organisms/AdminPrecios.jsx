import { useState, useEffect } from 'react';

export default function AdminPrecios() {
  const [precioPelo, setPrecioPelo] = useState("");
  const [precioBarba, setPrecioBarba] = useState("");

  // Carga los precios actuales al entrar
  useEffect(() => {
    const pPelo = localStorage.getItem("precioPelo") || "10000";
    const pBarba = localStorage.getItem("precioBarba") || "15000";
    setPrecioPelo(pPelo);
    setPrecioBarba(pBarba);
  }, []);

  const guardarPrecios = (e) => {
    e.preventDefault();
    if (precioPelo && precioBarba) {
      localStorage.setItem("precioPelo", precioPelo);
      localStorage.setItem("precioBarba", precioBarba);
      alert("Precios actualizados con éxito.");
    } else {
      alert("Por favor ingresa ambos precios.");
    }
  };

  return (
    <section className="formulario-seccion">
      <h2>Panel Admin - Cambiar Precios</h2>
      <form onSubmit={guardarPrecios} className="form-reserva">
        
        <div className="campo">
          <label htmlFor="precioPelo">Precio Corte de Pelo ($)</label>
          <input 
            type="number" 
            id="precioPelo" 
            value={precioPelo} 
            onChange={(e) => setPrecioPelo(e.target.value)} 
            required 
          />
        </div>
        
        <div className="campo">
          <label htmlFor="precioBarba">Precio Corte de Pelo + Barba ($)</label>
          <input 
            type="number" 
            id="precioBarba" 
            value={precioBarba} 
            onChange={(e) => setPrecioBarba(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" className="btn-confirmar">GUARDAR NUEVOS PRECIOS</button>
      </form>
    </section>
  );
}