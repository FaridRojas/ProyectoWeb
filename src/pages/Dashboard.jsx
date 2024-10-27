// src/pages/Dashboard.jsx
import { useState } from 'react';

function Dashboard() {
  const [clients, setClients] = useState(120);
  const [vehicles, setVehicles] = useState(10);
  const [repairs, setRepairs] = useState(30);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Panel de Administración</h1>

      <div className="row text-center mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Clientes</h3>
            <p>{clients}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Vehículos en Taller</h3>
            <p>{vehicles}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Reparaciones Completadas</h3>
            <p>{repairs}</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary mx-2">Registrar Cliente</button>
        <button className="btn btn-primary mx-2">Registrar Vehículo</button>
        <button className="btn btn-primary mx-2">Agendar Cita</button>
        <button className="btn btn-primary mx-2">Asignar Mecánico</button>
      </div>
    </div>
  );
}

export default Dashboard;
