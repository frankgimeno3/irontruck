import {useContext} from "react";
import { shipmentsContext } from "../../context/shipments.context";

function CargoExchange() {
    // const {shipments} = useContext(shipmentsContext);

return (
    <div>
        <ul>
            <li>Hola </li>
              {/* {shipments.map(shipments => <li key={shipments._id}>{shipments.pickUpDireccion}</li>)} */}
        </ul>
    </div>
);
}
    export default CargoExchange;