import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';
import ProfileService from "../../../services/profile.service";
import { AuthContext } from "../../../context/auth.context"


function Negotiating() {
  const { user } = useContext(AuthContext);
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const profileService = new ProfileService();

    profileService.getProfile(user._id)
      .then((response) => {
        if (response.data && response.data.createdShipments) {
          setShipments(response.data.createdShipments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Shipments in Negotiation</h2>
      {shipments && shipments.length > 0 ? (
        shipments
        .filter((shipment) => shipment.state === "inNegotiation")
        .map((shipment) => (
            <div className="fondo-Cards">
            <div >
              <div key={shipment._id} id="scrollspyHeading1" className="">
                <div className="card .bg-white">
                  <div className="card-body">
                    <h5 className="card-title">Shipment from {shipment.pickUpProvince} to {shipment.deliveryProvince}</h5>
                    <p> Content: {shipment.pallets} Pallets</p>
                    <div className="info">
                      <div className="contact">
                        <h6> Contact Information </h6>
                        <p className=".text-body">{shipment?.author.name}</p>
                        <p className=".text-body">{shipment?.author.email}</p>
                        <p className=".text-body">{shipment?.author.phoneNumber} </p>
                      </div>
                      <Link to={`/shipments/${shipment._id}`}>
                        <button className="btn btn-primary" >See Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
      ) : (
        <p>No shipments in Negotiation</p>
      )}
    </div>
  );
};

export default Negotiating;