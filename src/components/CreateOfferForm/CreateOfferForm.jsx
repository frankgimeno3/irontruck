
import ShipmentsService from "../../services/shipments.service";
import './CreateOfferForm.css';
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context"
import { Link } from "react-router-dom";



function CreateOfferForm() {

  const { user } = useContext(AuthContext)
  const [formValues, setFormValues] = useState({
    pickUpDireccion: "",
    pickUpProvince: "",
    deliveryDireccion: "",
    deliveryProvince: "",
    pallets: 0,
    creationDate: "2022-12-12"
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const shipment = {
      pickUpDireccion: formValues.pickUpDireccion,
      pickUpProvince: formValues.pickUpProvince,
      deliveryDireccion: formValues.deliveryDireccion,
      deliveryProvince: formValues.deliveryProvince,
      pallets: formValues.pallets,
    };
    const shipmentsService = new ShipmentsService("your-token-here");
    shipmentsService
      .addShipments(shipment)
      .then((response) => {
        console.log(response.data);
        setFormValues({
          pickUpDireccion: "",
          pickUpProvince: "",
          deliveryDireccion: "",
          deliveryProvince: "",
          pallets: 0,

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (

    <>
      <div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          Create Offer
        </button>
        <form class="dropdown-menu p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="pickUpDireccionInput" className="form-label">Pick up direction</label>
            <input
              type="text"
              className="form-control"
              id="pickUpDireccionInput"
              name="pickUpDireccion"
              value={formValues.pickUpDireccion}
              onChange={handleInputChange}
              placeholder="Insert origin city"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pickUpProvinceInput" className="form-label">Pick up province</label>
            <input
              type="text"
              className="form-control"
              id="pickUpProvinceInput"
              name="pickUpProvince"
              value={formValues.pickUpProvince}
              onChange={handleInputChange}
              placeholder="Insert origin province"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="deliveryDireccionInput" className="form-label">Delivery direction</label>
            <input
              type="text"
              className="form-control"
              id="deliveryDireccionInput"
              name="deliveryDireccion"
              value={formValues.deliveryDireccion}
              onChange={handleInputChange}
              placeholder="Insert destination city"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="deliveryProvinceInput" className="form-label">Delivery province</label>
            <input
              type="text"
              className="form-control"
              id="deliveryProvinceInput"
              name="deliveryProvince"
              value={formValues.deliveryProvince}
              onChange={handleInputChange}
              placeholder="Insert destination province"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="palletsInput" className="form-label">Number of pallets</label>
            <input
              type="number"
              className="form-control"
              id="palletsInput"
              name="pallets"
              value={formValues.pallets}
              onChange={handleInputChange}
              placeholder="Insert number of pallets"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="creationDateInput" className="form-label">Creation Date</label>
            <input
              type="date"
              className="form-control"
              id="creationDateInput"
              name="creationDate"
              value={formValues.creationDate}
              onChange={handleInputChange}
              placeholder="Insert number of pallets"
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>


    </>

  );
}

export default CreateOfferForm;




{/* <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form class="dropdown-menu p-4">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck2">
          <label class="form-check-label" for="dropdownCheck2">
            Remember me
          </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div> */}