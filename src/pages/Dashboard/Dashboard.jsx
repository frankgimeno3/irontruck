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
              <div className="SearchMyOffer">
                <h2>Search an Offer</h2>
                <form>
                  <label htmlFor="date">Date:</label>
                  <input type="date" id="date" />
                  <label htmlFor="city">City:</label>
                  <input type="text" id="city" />
                  <label htmlFor="keywords">Keywords:</label>
                  <input type="text" id="keywords" />
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="MyOffers">
                <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#scrollspyHeading1">First</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                  </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
                  <h4 id="scrollspyHeading1"><CargoExchange /></h4>
                </div>
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
