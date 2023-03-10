import React from 'react';
import './CreateOfferForm.css';

function CreateOfferForm() {
  return (
    <form>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Origin</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert origin city"/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Departure Date</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Departure Hour</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Approx departure hour"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Destination</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert destination city"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">ArriVal Date</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">ArriVal Hour</label>
      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Approx departure hour"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Available Space</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Coments</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <button className="learn-more" type="submit">
      <span className="circle" aria-hidden="true">  
        <span className="icon arrow"></span>
      </span>  
      
      <span className="button-text">Create Offer</span>
    </button>

    </form>
  );
}

export default CreateOfferForm;