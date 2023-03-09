function CargoOfferCard({shipment}) {
  return (
    <div className="MyOffers">
      <h2>My Offers</h2>
      <div className="Offer">
        <h3>{shipment.pallets} pallets pto be delivered into {shipment.pickUpProvince}</h3>
        <div className="OfferDetailsBox">
          <div className="OfferDetailsleft">
            <p><strong>Author:</strong> {shipment.author.name}</p>
            <p><strong>Pickup Direction :</strong> {shipment.pickUpDireccion} </p>
            <p><strong>Pickup Province:</strong> {shipment.pickUpProvince}</p>
          </div>
          <div >
            <p><strong>Pickup Direction:</strong> {shipment.deliveryDireccion}</p>
            <p><strong>Delivery Province:</strong> {shipment.deliveryProvince}</p>
            <p><strong>Number of Pallets:</strong> {shipment.pallets}</p>
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