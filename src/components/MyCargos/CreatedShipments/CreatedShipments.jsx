import React, { useContext, useState, useEffect } from "react";
// import ShipmentsService from "../../../services/shipments.service";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';
import ProfileService from "../../../services/profile.service";
import { AuthContext } from "../../../context/auth.context";
import CardShipment from "../../CardShipment/CardShipment"

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
        console.log(response.data.createdShipments)
      })
      .catch((err) => { console.log(err) });
  }, []);


  return (
    <div className="bg-dark-subtle">
      <h2 className="text-body-emphasis">Created Shipments</h2>


      {shipments.map((shipment) => (
        <div key={shipment._id} id="scrollspyHeading1" className="">


          <div className="card .bg-white">

            <div className="card-body">
              <h5 className="card-title">Shipment {shipment.pickUpProvince}  {shipment.deliveryProvince}</h5>
              <p> {shipment.pallets} Pallets</p>

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




          <div>



          </div>


        </div>
      ))}
    </div>


  );
};

export default CreatedShipments;




