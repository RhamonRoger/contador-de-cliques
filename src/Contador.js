import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.container}>
      <h1>Contador: {count}</h1>
      <button style={styles.button} onClick={incrementarContador}>
        Clique aqui
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default Contador;
