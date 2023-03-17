
/* eslint-disable */
import React, { useState } from 'react';
import '../../App.css';
import axios from 'axios'; // importa Axios

function CargoFilter() {
  const [pickUpDireccion, setPickUpDireccion] = useState('');
  const [deliveryDireccion, setDeliveryDireccion] = useState('');
  const [shipments, setShipments] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/shipments', {
      pickUpDireccion,
      deliveryDireccion,
    });
    setShipments(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="pickUpDireccion" className="form-label">Pick-up Address</label>
        <input type="text" className="form-control" id="pickUpDireccion" value={pickUpDireccion} onChange={(event) => setPickUpDireccion(event.target.value)} placeholder="Insert pick-up address" />
      </div>
      <div className="mb-3">
        <label htmlFor="deliveryDireccion" className="form-label">Delivery Address</label>
        <input type="text" className="form-control" id="deliveryDireccion" value={deliveryDireccion} onChange={(event) => setDeliveryDireccion(event.target.value)} placeholder="Insert delivery address" />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
      <div>

      </div>
    </form>
  );
}

export default CargoFilter;