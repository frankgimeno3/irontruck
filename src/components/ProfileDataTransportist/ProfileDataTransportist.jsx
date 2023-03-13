import React from 'react';
import './ProfileDataTransportist.css';

function EditProfileForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert your name here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Insert your email here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Insert your phone number here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Insert password here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Repeat Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Insert password again" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">License Plate</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert your license plate here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Profile image</label>
        <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Insert your license plate here" />
      </div>

      <button className="learn-more" type="submit">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>

        <span className="button-text">Submit changes</span>
      </button>

    </form>
  );
}

export default EditProfileForm;