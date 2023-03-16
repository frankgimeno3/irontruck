import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { Link } from "react-router-dom";
import "./CardShipment.css";
// import { Route } from "react-router-dom";
// import ShipmentDetails from "../../pages/ShipmentDetails/ShipmentDetails"

function CardShipment() {
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

        <div className="fondo-Cards">


            <div >
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
        </div>




    );
}

export default CardShipment;