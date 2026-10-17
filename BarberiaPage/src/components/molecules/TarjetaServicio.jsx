import Image from '../atoms/Image';
import Text from '../atoms/Text';

export default function TarjetaServicio({ imagenSrc, precio, altText }) {
  return (
    <div className="tarjeta-servicio">
      <Image src={imagenSrc} alt={altText} className="img-servicio" />
      <div className="info-servicio">
        <Text variant="p">${precio}</Text>
      </div>
    </div>
  );
}