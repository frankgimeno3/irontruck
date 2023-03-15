import React, { useState } from 'react';
import './MyCargos.css';
import CreatedShipments from '../../components/MyCargos/CreatedShipments/CreatedShipments';
import Negotiating from '../../components/MyCargos/Negotiating/Negotiating';
import Completed from '../../components/MyCargos/Completed/Completed';
import Rejected from '../../components/MyCargos/Rejected/Rejected';
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";


const MyCargos = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  const { isTransportist, isLoading } = useContext(AuthContext);

  const handleClick = (component) => {
    setCurrentComponent(component);
  }

  return (
    <div className="my-cargos">
      <section className="buttons">
      {!isLoading && !isTransportist && (
        <>
        <button className="button" onClick={() => handleClick(<CreatedShipments />)}>Created</button>
        </>
      )} 
        <button className="button" onClick={() => handleClick(<Negotiating />)}>Negotiating</button>
        <button className="button green" onClick={() => handleClick(<Completed />)}>Completed</button>
        <button className="button red" onClick={() => handleClick(<Rejected />)}>Rejected</button>
      </section>
      <section className="components">
        {currentComponent}
      </section>
    </div>
  );
};

export default MyCargos;