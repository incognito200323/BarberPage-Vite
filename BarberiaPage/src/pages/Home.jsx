
import TarjetaServicio from '../components/molecules/TarjetaServicio';
import Text from '../components/atoms/Text';
import servicios from '../data/servicios'; 

export default function Home() {
  return (
    <>
      <main className="cuerpo-main">
        <div className="imagen-contenedor">
          <img src="./Imagenes/Foto-Main.webp" alt="Foto de Glow Up Barbería" className="imagen-main" />
        </div>
        <div>
          <Text variant="h1">Bienvenido a Glow Up</Text>
          <Text variant="p">El mejor estilo para ti.</Text>
        </div>
      </main>

      <section className="galeria-fotos">
        <Text variant="h2">Fotos Referenciales</Text>
        <div className="contenedor-galeria">
          
          {/* Aquí aplicamos la lógica del profesor con .map() */}
          {servicios.map((servicio) => (
            <TarjetaServicio 
              key={servicio.id} 
              imagenSrc={servicio.image} 
              precio={servicio.price} 
              altText={servicio.name} 
            />
          ))}

        </div>
      </section>
    </>
  );
}