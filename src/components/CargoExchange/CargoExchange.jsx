import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { Link } from "react-router-dom";
import "./CargoExchange.css";

function CargoExchange() {
  const [shipments, setShipments] = useState([]);
  const [sortType, setSortType] = useState("");

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

  const sortByOrigin = () => {
    setSortType("origin");
    setShipments([...shipments].sort((a, b) => a.pickUpProvince.localeCompare(b.pickUpProvince)));
  };

  const sortByDestination = () => {
    setSortType("destination");
    setShipments([...shipments].sort((a, b) => a.deliveryProvince.localeCompare(b.deliveryProvince)));
  };

  const sortByPallets = () => {
    setSortType("pallets");
    setShipments([...shipments].sort((a, b) => b.pallets - a.pallets));
  };

  return (
    <div>
      
      <div >
        <h2>Filter shipments</h2>
        <div className="filterdiv">
        <button className={sortType === "origin" ? "active" : ""} onClick={sortByOrigin} id="sortbyorigin">
          Sort by Origin Alphabetically
        </button>
        <button className={sortType === "destination" ? "active" : ""} onClick={sortByDestination} id="sortbydestination">
          Sort by Destination Alphabetically
        </button>
        <button className={sortType === "pallets" ? "active" : ""} onClick={sortByPallets} id="sortbypallets"> 
          Sort by Number of Pallets
        </button>
      </div>
      </div>
      
      <h2>Shipments List</h2>
      <div className="cards">
        {shipments.map((shipment) => (
          <div key={shipment._id} className="card" id="scrollspyHeading1">
            <div className="card-body">
              <p>
                Shipment from {shipment.pickUpProvince} to {shipment.deliveryProvince}. {shipment.pallets} pallets
              </p>
            </div>
            <Link to={`/shipments/${shipment._id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CargoExchange;