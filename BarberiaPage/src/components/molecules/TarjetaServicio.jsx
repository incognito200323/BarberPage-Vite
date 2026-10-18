import Image from '../atoms/Image';
import Text from '../atoms/Text';

export default function TarjetaServicio({ imagenSrc, precio, altText, descripcion, isExpanded, onToggle }) {
return (
    <div 
      className={`tarjeta-servicio ${isExpanded ? 'expandida' : ''}`}
      onClick={onToggle}
    >
      <img src={imagenSrc} alt={altText} className="img-servicio" />
      
      <div className="info-servicio">
        <p className="nombre-corte">{altText}</p>
        <div className="descripcion-detallada">
          <p>{descripcion}</p>
          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Valor: \${precio}</p>
        </div>
      </div>
    </div>
  );
}