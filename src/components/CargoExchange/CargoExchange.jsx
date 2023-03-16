import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { Link } from "react-router-dom";
import "./CargoExchange.css";

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
        <Link className="navbar-brand" href="#">Shipments List</Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#scrollspyHeading3">Third</Link></li>
              <li><Link className="dropdown-item" href="#scrollspyHeading4">Fourth</Link></li>
              <li>

              </li>
              <li><Link className="dropdown-item" href="#scrollspyHeading5">Fifth</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
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




            </div>


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