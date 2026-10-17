import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>  
      <Footer />
    </>
  );
}

export default App;