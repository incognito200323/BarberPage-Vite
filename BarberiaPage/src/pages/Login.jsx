import FormularioLogin  from '../components/organisms/FormularioLogin';

export default function Login({ setEsAdmin, setSesionIniciada }) {
  return (
    <>
      <FormularioLogin
      setEsAdmin={setEsAdmin} 
      setSesionIniciada={setSesionIniciada} />
    </>
  );
}