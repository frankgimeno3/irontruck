import React from 'react';
import '../../App.css';

function CreateOfferForm() {
  return (
    <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Origin</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Insert origin city"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Departure Date</label>
      <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Departure Hour</label>
      <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Approx departure hour"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Destination</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Insert destination city"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">ArriVal Date</label>
      <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">ArriVal Hour</label>
      <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Approx departure hour"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Available Space</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Coments</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </form>
  );
}

export default CreateOfferForm;