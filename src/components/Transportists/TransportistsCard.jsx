import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { Link } from "react-router-dom";


function CardTransportist({ id }) {


    const [shipments, setShipments] = useState([]);

    useEffect(() => {
        const shipmentsService = new ShipmentsService("your-token-here");

        shipmentsService
            .getShipmentsById(id)
            .then((response) => {
                console.log()
                setShipments(response.data.transportist);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (

        <div className="fondo-Cards">

            <div >
                {shipments.map((transportist) => (

                    <div key={transportist._id} id="scrollspyHeading1" className="">

                        <div className="card .bg-white">

                            <div className="card-body">

                                <div className="info">

                                    <div className="contact">
                                        <h6> Contact Information </h6>

                                        <p className=".text-body">{transportist.name}</p>
                                        <p className=".text-body">{transportist.email}</p>
                                        <p className=".text-body">{transportist.phoneNumber} </p>
                                    </div>
                                    <button className="btn btn-primary" >Accept</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default CardTransportist;