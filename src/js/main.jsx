import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// index.css'
import '../styles/index.css';
// components
function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {
  return (
    <div className='bigCounter'>
      <div className='calendar'>🕒</div>
      <div className='four'>{digitFour}</div>
      <div className='three'>{digitThree}</div>
      <div className='two'>{digitTwo}</div>
      <div className='one'>{digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = { 
  digitFour: PropTypes.number.isRequired,
  digitThree: PropTypes.number.isRequired,
  digitTwo: PropTypes.number.isRequired,
  digitOne: PropTypes.number.isRequired,
};

// App principal
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // limpieza
  }, []);

  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  return (
    <SimpleCounter 
      digitOne={one} 
      digitTwo={two} 
      digitThree={three} 
      digitFour={four} 
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);