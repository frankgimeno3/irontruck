/* eslint-disable */

import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './auth.context';
import ShipmentsService from '../services/shipments.service';

const shipmentsContext = createContext();    //para "consumir" los datos del context

function ShipmentsProviderWrapper(props) {    //para "proveer" datos

    const [shipments, setShipments] = useState([]);
    const { getToken } = useContext(AuthContext);

    const ShipmentsService = new ShipmentsService(getToken());

    const getShipments = () => {
        ShipmentsService.getShipments()
            .then(results => {
                setShipments(results.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getShipments();
    }, []);

    return (<shipmentsContext.Provider value={{ shipments, getShipments }}>
        {props.children}
    </shipmentsContext.Provider>);
}

export { shipmentsContext, ShipmentsProviderWrapper };