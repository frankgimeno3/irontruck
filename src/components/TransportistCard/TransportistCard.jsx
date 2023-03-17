import "./TransportistCard.jsx";

function TransportistCard() {


    return (
        <div class="row">
            <div class="col-6">
                <div class="card" style={{ height: "150px" }}>
                    <div class="row no-gutters align-items-center" style={{ height: "100%" }}>
                        <div class="col-8">
                            <div class="card-body">
                                <p class="card-text font-weight-bold">Paco el Transportista</p>
                                <p class="card-text font-weight-bold">Transportist@gmail.com</p>
                                <p class="card-text font-weight-bold">656735403</p>
                            </div>
                        </div>
                        <div class="col-4 d-flex align-items-center justify-content-center">
                            <button class="btn btn-success rounded-pill" style={{ borderRadius: "20px" }}>
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