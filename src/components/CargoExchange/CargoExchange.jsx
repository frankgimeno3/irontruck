import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { Link } from "react-router-dom";
import "./CargoExchange.css";
// import { Route } from "react-router-dom";
// import ShipmentDetails from "../../pages/ShipmentDetails/ShipmentDetails"

function CargoExchange() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const shipmentsService = new ShipmentsService("your-token-here");
    shipmentsService
      .getShipments()
      .then((response) => {
        setShipments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <div>

      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">Shipments List</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
              <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
              <li>

              </li>
              <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>...</p>

      </div>
      <div className="cards">
        {shipments.map((shipment) => (
          <div key={shipment._id} className="card" id="scrollspyHeading1">

            <div className="card-body">

              <p>
                Shipment {shipment.pickUpProvince} to {shipment.deliveryProvince}.   {shipment.pallets} pallets
              </p>



              {/* <h5 className="card title">Number of Pallets</h5>
            <p> {shipment.pallets}</p> */}
              {/* other shipment data */}
            </div>
            {/* <div className="shipment-address">

            <div className="pickup-address">
              <h5> Datos de Recogida</h5>
              <p> {shipment.pickUpDireccion}, {shipment.pickUpProvince}</p>

            </div>

            <div className="delivery-address">
              <h5> Datos de Entrega</h5>
              <p>{shipment.deliveryDireccion}, {shipment.deliveryProvince}</p>

            </div>
          </div> */}

            <Link to={`/shipments/${shipment._id}`}>
              {/* <Route path="/:idShipment" component={ShipmentDetails} /> */}
              <button className="btn btn-primary" >See Details</button>
            </Link>


          </div>
        ))}
      </div>
    </div>




  );
}

export default CargoExchange;