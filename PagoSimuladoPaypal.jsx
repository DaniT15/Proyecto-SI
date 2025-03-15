import React, { useState } from 'react';
import '../estilos/PagoSimuladoPaypal.css'; // Ruta actualizada

const MONTO_POR_DEFECTO = 5.00;

function PagoSimuladoPaypal() {
  const [emailPaypal, setEmailPaypal] = useState('');
  const [contrasenaPaypal, setContrasenaPaypal] = useState('');
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailPaypal || !contrasenaPaypal) {
      setError('Por favor, complete los campos.');
      return;
    }

    setTimeout(() => {
      setPagoExitoso(true);
      setError('');
    }, 500);
  };

  if (pagoExitoso) {
    return <div className="pago-exitoso">¡Pago con PayPal exitoso! Monto: ${MONTO_POR_DEFECTO}</div>;
  }

  return (
    <div className="pago-paypal-container">
      {error && <div className="error-message">{error}</div>}
      <div className="pago-paypal-form">
        <div className="paypal-logo">
          <img src="https://www.paypalobjects.com/webstatic/en-us/i/buttons/PP_logo_h_200x51.png" alt="PayPal Logo" />
        </div>
        <div className="monto-info">
          <div>Reserva 1</div>
          <div>Total</div>
        </div>
        <div className="monto-valores">
          <div>${MONTO_POR_DEFECTO}</div>
          <div>${MONTO_POR_DEFECTO}</div>
        </div>
        <label>
          Correo electrónico
          <input type="email" value={emailPaypal} onChange={(e) => setEmailPaypal(e.target.value)} />
        </label>
        <label>
          Contraseña
          <input type="password" value={contrasenaPaypal} onChange={(e) => setContrasenaPaypal(e.target.value)} />
        </label>
        <button type="submit" className="paypal-button">Comprar ahora con PayPal</button>
      </div>
    </div>
  );
}

export default PagoSimuladoPaypal;