function OfferCard() {
  return (
    <div className="MyOffers">
      <h2>My Offers</h2>
      <div className="Offer">
        <h3>Espacio de tres pallets para llevar a Cuenca</h3>
        <div className="OfferDetailsBox">
          <div className="OfferDetailsleft">
            <p><strong>Origen:</strong> Cornellà de llobregat</p>
            <p><strong>Fecha de origen:</strong> 13/04/2023</p>
            <p><strong>Hora estimada origen:</strong> 05:30h</p>
          </div>
          <div >
            <p><strong>Destino:</strong> Cuenca</p>
            <p><strong>Fecha de destino:</strong> 13/04/2023</p>
            <p><strong>Hora estimada destino:</strong> 14:00h</p>
          </div>
        </div>
        <div className="myOfferButtons">
          <button>Comments</button>
          <button>Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
      <div className="Offer">
        <h3>Espacio de tres pallets para llevar a Manresa</h3>
        <div className="OfferDetailsBox">
          <div className="OfferDetailsleft">
            <p><strong>Origen:</strong> Cuenca</p>
            <p><strong>Fecha de origen:</strong> 14/04/2023</p>
            <p><strong>Hora estimada origen:</strong> 05:30h</p>
          </div>
          <div className="OfferDetails">
            <p><strong>Destino:</strong> Manresa</p>
            <p><strong>Fecha de destino:</strong> 14/04/2023</p>
            <p><strong>Hora estimada destino:</strong> 13:00h</p>
          </div>
        </div>
        <div className="myOfferButtons">
          <button>Comments</button>
          <button>Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;