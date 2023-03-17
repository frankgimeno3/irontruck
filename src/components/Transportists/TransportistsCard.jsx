/* eslint-disable */
import React, { useState, useEffect } from "react";
import TranspService from "../../services/transp.service";

function CardTransportist(shipmenttransportists) {
    const  idTransportist = shipmenttransportists._id;
    const [transportists, setTransportists] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        TranspService
          .getTransportistById(idTransportist)
    
          .then((response) => {
            setTransportists(response.data);
            setIsLoading(!isLoading);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [idTransportist]);
   

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