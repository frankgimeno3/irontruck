import "./TransportistCard.jsx";

function TransportistCard() {


    return (
        <div className="row">
            <div className="col-6">
                <div className="card" style={{ height: "150px" }}>
                    <div className="row no-gutters align-items-center" style={{ height: "100%" }}>
                        <div className="col-8">
                            <div className="card-body">
                                <p className="card-text font-weight-bold">Paco el Transportista</p>
                                <p className="card-text font-weight-bold">Transportist@gmail.com</p>
                                <p className="card-text font-weight-bold">656735403</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button className="btn btn-success rounded-pill" style={{ borderRadius: "20px" }}>
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );


}
export default TransportistCard;