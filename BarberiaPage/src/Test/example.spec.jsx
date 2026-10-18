import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/organisms/Header'; 
import TarjetaServicio from '../components/molecules/TarjetaServicio';

describe('Pruebas Unitarias - Componentes', () => {

  it('1. El Header debe mostrar "Panel Admin" si el usuario es administrador', () => {
    render(
      <MemoryRouter>
        <Header esAdmin={true} sesionIniciada={true} />
      </MemoryRouter>
    );
    
    const enlaceAdmin = screen.getByText(/Panel Admin/i);
    // Usamos truthy para verificar que el elemento se encontró exitosamente
    expect(enlaceAdmin).toBeTruthy();
  });

  it('2. El Header debe mostrar "Reservar" si es un cliente normal', () => {
    render(
      <MemoryRouter>
        <Header esAdmin={false} sesionIniciada={false} />
      </MemoryRouter>
    );
    
    const enlaceReserva = screen.getByText(/Reserva Tu hora/i);
    expect(enlaceReserva).toBeTruthy();
  });

  it('3. La TarjetaServicio debe mostrar el precio correctamente', () => {
    render(
      <TarjetaServicio 
        imagenSrc="/foto-prueba.jpg" 
        precio={25000} 
        altText="Corte Premium" 
        descripcion="Un corte de prueba" 
        isExpanded={true} 
      />
    );
    
    const precioCorte = screen.getByText(/25000/i);
    expect(precioCorte).toBeTruthy();
  });

});