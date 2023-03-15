import React, { useContext, useState, useEffect } from "react";
// import ShipmentsService from "../../../services/shipments.service";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';
import ProfileService from "../../../services/profile.service";
import { AuthContext } from "../../../context/auth.context"


function CreatedShipments() {
  const { user } = useContext(AuthContext)
  const [shipments, setShipments] = useState([]);

  console.log("hello")

  useEffect(() => {
    const profileService = new ProfileService();
    //   profileService
    profileService.getProfile(user._id)
      .then((response) => {

        setShipments(response.data.createdShipments)
      })
      .catch((err) => { console.log(err) });
  }, []);


  return (
    <div>
      <h2>Created Shipments</h2>



      {shipments
        .filter((shipment) => shipment.state === "Completed")
        .map((shipment) => (

          shipment.state == "inNegotiation" &&
          <div key={shipment._id} className="card">
            <div className="shipment-info">
              {/* <p>{shipment.author}</p> */}
              {/* <p>{shipment.author.email}</p> */}
              <p>Creation Date: {shipment.creationDate}</p>
              <p>Shipment pallets: {shipment.pallets}</p>
              {/* other shipment data */}
            </div>
            <div className="shipment-address">
              <div className="pickup-address">
                <p>Pick up direction: {shipment.pickUpDireccion}</p>
                <p>Pick up province: {shipment.pickUpProvince}</p>
              </div>
              <div className="delivery-address">
                <p>Delivery direction: {shipment.deliveryDireccion}</p>
                <p>Delivery province: {shipment.deliveryProvince}</p>
              </div>
            </div>
            <Link to={`/shipments/${shipment._id}`}>
              {/* <Route path="/:idShipment" component={ShipmentDetails} /> */}
              <button className="detailsbutton">See Details</button>
            </Link>

          </div>

        ))}
    </div>

  );
};

export default CreatedShipments;