import CreateOfferForm from "../../components/CreateOfferForm/CreateOfferForm";
import CargoExchange from "../../components/CargoExchange/CargoExchange";
import "../../App.css";
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Dashboard() {
  const { isTransportist, isLoading } = useContext(AuthContext);

  return (
    <>
      <div className="HomeStructure">
        <div className="Content">
          {!isLoading && !isTransportist && (
            <section className="CreateOfferSection">
              <h2>Create an Offer</h2>
              <CreateOfferForm />
            </section>
          )}

          {!isLoading && isTransportist && (
            <div>

              <div className="MyOffers">
                <h4 id="scrollspyHeading1"><CargoExchange /></h4>
             </div>
            </div>
          )}
        </div>
      </div>
      <footer>
        <div className="legal-notice">
          <a href="/">Aviso Legal</a>
        </div>
        <div className="cookies-policy">
          <a href="/">Política de Cookies</a>
        </div>
        <div className="contact-us">
          <a href="/">Contacto</a>
        </div>
        <div className="copyright">© 2023 Todos los derechos reservados.</div>
      </footer>
    </>
  );
}

export default Dashboard;
