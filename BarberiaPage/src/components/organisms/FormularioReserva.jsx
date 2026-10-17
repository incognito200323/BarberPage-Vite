import { useState, useEffect } from 'react';
import Text from '../atoms/Text';

export default function FormularioReserva() {
    // Estados para guardar los precios base y los servicios extra
    const [precioPelo, setPrecioPelo] = useState("10000");
    const [precioBarba, setPrecioBarba] = useState("15000");
    const [serviciosExtra, setServiciosExtra] = useState([]);

    // useEffect reemplaza tu antigua línea: document.addEventListener("DOMContentLoaded", cargarPrecios);
    useEffect(() => {
        // Leemos de localStorage apenas carga el componente
        const guardadoPelo = localStorage.getItem("precioPelo");
        const guardadoBarba = localStorage.getItem("precioBarba");
        const guardadosExtra = JSON.parse(localStorage.getItem("serviciosExtra")) || [];

        if (guardadoPelo) setPrecioPelo(guardadoPelo);
        if (guardadoBarba) setPrecioBarba(guardadoBarba);
        setServiciosExtra(guardadosExtra);
    }, []); // Los corchetes vacíos indican que esto se ejecuta SOLO UNA VEZ al inicio.

    return (
        <section className="formulario-seccion">
            <Text variant="h2">Reserva de horas</Text>
            <form action="#" className="form-reserva">
                <div className="campo">
                    <label>NOMBRE COMPLETO</label>
                    <input type="text" required />
                </div>
                
                <div className="campo">
                    <label>SERVICIO</label>
                    <select required>
                        <option value="" disabled selected>Seleccioná un servicio</option>
                        <option value="corte">Corte de Pelo - \${precioPelo}</option>
                        <option value="corte-barba">Corte de Pelo + Barba - \${precioBarba}</option>
                        
                        {/* Iteramos sobre los servicios extra creados en el admin, igual que tu for() original */}
                        {serviciosExtra.map((servicio, index) => (
                            <option key={index} value={`extra_${index}`}>
                                {servicio.nombre} - \${servicio.precio}
                            </option>
                        ))}
                    </select>
                </div>
                
                <button type="submit" className="btn-confirmar">CONFIRMAR RESERVA</button>
            </form>
        </section>
    );
}