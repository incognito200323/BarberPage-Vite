import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header  from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home  from './pages/Home';
import Reserva from './pages/Reserva';
import Login from './pages/Login';
import Registro  from './pages/Registro';
import Admin from './pages/Admin';

function App() {
  const [esAdmin, setEsAdmin] = useState(false);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setEsAdmin(false);
    setSesionIniciada(false);
    alert("Has cerrado sesión correctamente.");
    navigate("/");
  };

  return (
    <>
      <Header 
        esAdmin={esAdmin} 
        sesionIniciada={sesionIniciada || esAdmin} 
        onLogout={handleLogout} 
      /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/admin" element={<Admin />} />
        <Route 
          path="/login" 
          element={
            <Login 
              setEsAdmin={setEsAdmin} 
              setSesionIniciada={setSesionIniciada} 
            />
          } 
        />
        <Route 
          path="/registro" 
          element={
            <Registro 
              setSesionIniciada={setSesionIniciada} 
            />
          } 
        />
      </Routes>  
      <Footer />
    </>
  );
}

export default App;