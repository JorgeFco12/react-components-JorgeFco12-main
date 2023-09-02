import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  return (
    <div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', width: '50%', margin: '0 auto' }}>
        <div>
          <label style={{ marginBottom: '8px' }}>Nombre</label> <br></br>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
        </div>

        <div>
          <label style={{ marginBottom: '8px' }}>Apellido</label> <br></br>
          <input value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingresa tu apellido" />
        </div>

        <div>
          <label style={{ marginBottom: '8px' }}>Edad</label> <br></br>
          <input value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Ingresa tu edad" type="number" />
        </div>

        <button>Guardar</button>
      </div>
    </div>
  );
};

export default Formulario;
