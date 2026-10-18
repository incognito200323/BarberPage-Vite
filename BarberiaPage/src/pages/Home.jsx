import { useState } from 'react';
import TarjetaServicio from '../components/molecules/TarjetaServicio';
import Text from '../components/atoms/Text';
import servicios from '../data/servicios'; 

export default function Home() {
  // Estado para controlar qué tarjeta está expandida 
  const [selectedService, setSelectedService] = useState(null);

  const handleToggleSelect = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <>
      <main className="cuerpo-main">
        <div className="imagen-contenedor">
          <img src="./Imagenes/Foto-Main.webp" alt="Foto de Glow Up Barbería" className="imagen-main" />
        </div>
        <div>
          <Text variant="h1">Bienvenido a Glow Up</Text>
        </div>
      </main>

      <section className="galeria-fotos">
        <Text variant="h2">Fotos Referenciales</Text>
        <p>Haz clic en cualquier corte para ver más detalles.</p>
        
        <div className="contenedor-galeria">
          
          {servicios.map((servicio) => (
            <TarjetaServicio 
              key={servicio.id} 
              imagenSrc={servicio.image} 
              precio={servicio.price} 
              altText={servicio.name} 
              descripcion={servicio.descripcion} 
              isExpanded={selectedService === servicio.id}
              onToggle={() => handleToggleSelect(servicio.id)}
            />
          ))}

        </div>
      </section>
    </>
  );
}