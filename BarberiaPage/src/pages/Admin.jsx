import AdminPrecios from '../components/organisms/AdminPrecios';
import AdminServicios from '../components/organisms/AdminServicios';

export default function Admin() {
  return (
    <main className="reserva-main" style={{ flexDirection: 'column', gap: '40px' }}>
      <AdminPrecios />
      <AdminServicios />
    </main>
  );
}