import React from 'react';
import '../../App.css';

function CreateOfferForm() {
  return (
    <form>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Origin</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert origin city"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Departure Date</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Departure Hour</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Approx departure hour"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Destination</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert destination city"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">ArriVal Date</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">ArriVal Hour</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Approx departure hour"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Available Space</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Coments</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </form>
  );
}

export default CreateOfferForm;