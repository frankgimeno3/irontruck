import "./CargoOfferCard.css"


function CargoOfferCard() {
  return (
    <div className="MyOffers">
      <h2>My Offers</h2>
      <div className="Offer">
        <h3>3 pallets pto be delivered into CUENCA</h3>
        <div className="OfferDetailsBox">
          <div className="OfferDetailsleft">
            <p><strong>Author:</strong> ANTONIO</p>
            <p><strong>Pickup Direction :</strong> Casa de Antonio </p>
            <p><strong>Pickup Province:</strong> Barcelona</p>
          </div>
          <div >
            <p><strong>Delivery Direction:</strong> Casa de la chati de Antonio</p>
            <p><strong>Delivery Province:</strong> Chatilandia</p>
            <p><strong>Number of Pallets:</strong>12</p>
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

export default CargoOfferCard;