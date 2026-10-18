import FormularioRegistro  from '../components/organisms/FormularioRegistro';

export default function Registro({ setSesionIniciada }) {
  return (
    <>
      <FormularioRegistro setSesionIniciada={setSesionIniciada} />
    </>
  );
}