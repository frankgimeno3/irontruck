/* eslint-disable */
import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";

function CardTransportist(idshipment) {

    const [transportists, setTransportists] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const shipmentsService = new ShipmentsService("your-token-here");

        shipmentsService
            .getShipmentById(idshipment.shipment)
            .then((response) => {

                setTransportists(response.data.transportists);

                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="fondo-Cards">
            <div >
                {transportists.map((transportist) => (

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