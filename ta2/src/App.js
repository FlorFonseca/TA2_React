import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className='contenedor'>
      <Card>
        <h2>Tarea 1</h2>
        <p>Limpiar el cuarto</p>
        <p><strong>Asignada a:</strong> Leonardo DiCaprio</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-14</p>
        <p><strong>Fecha de fin:</strong> 2024-09-15</p>
      </Card>

      <Card>
        <h2>Tarea 2</h2>
        <p>Hacer 5 ejercicios de MatDiscreta II</p>
        <p><strong>Asignada a:</strong> Jessica Parker</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-05</p>
        <p><strong>Fecha de fin:</strong> 2024-09-05</p>
      </Card>
      
      <Card>
        <h2>Tarea 3</h2>
        <p>Pasear al perro</p>
        <p><strong>Asignada a:</strong> Selena Gomez</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-12</p>
        <p><strong>Fecha de fin:</strong> 2024-09-13</p>
      </Card>
    </div>
  );
}

export default App;
