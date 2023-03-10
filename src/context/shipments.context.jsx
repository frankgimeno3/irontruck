import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './auth.context';
import ShipmentsService from '../services/shipments.service';

const shipmentsContext = createContext();    //para "consumir" los datos del context

function ShipmentsProviderWrapper(props) {    //para "proveer" datos

    const [shipments, setShipments] = useState([]);
    const {getToken} = useContext(AuthContext);

    const ShipmentsService = new ShipmentsService(getToken());

    const getShipments = () => {
        // axios.get(process.env.REACT_APP_API_URL+"/shipments", {headers: {authorization: `Bearer ${getToken()}`}})
        ShipmentsService.getShipments()
        .then(results => {
            console.log("shipments ctx: ", results.data);
            setShipments(results.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getShipments();
    }, []);

    return(<shipmentsContext.Provider value={{shipments, getShipments}}>
            {props.children}
    </shipmentsContext.Provider>);
}

export {shipmentsContext, ShipmentsProviderWrapper};