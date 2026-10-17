import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/login" element={<Login />} />
      </Routes>  
      <Footer />
    </>
  );
}

export default App;