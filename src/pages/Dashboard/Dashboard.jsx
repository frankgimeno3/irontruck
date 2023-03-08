import React from 'react';
import CreateOfferForm from '../../components/CreateOfferForm/CreateOfferForm';
import OfferCard from '../../components/CargoOfferCard/CargoOfferCard';
import '../../App.css';

function Dashboard() {
  return (
    <>
    <div className="HomeStructure">
        <div className="Content">
        <section className="CreateOfferSection">
        <h2>Create an Offer</h2>
          <CreateOfferForm />
        </section>
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
            <OfferCard />
        </div>
      </div>
    </div>
      <footer>
        <div class="legal-notice">
            <a href="/">Aviso Legal</a>
        </div>
        <div class="cookies-policy">
            <a href="/">Política de Cookies</a>
        </div>
        <div class="contact-us">
            <a href="/">Contacto</a>
        </div>
        <div class="copyright">
            © 2023 Todos los derechos reservados.
        </div>
        </footer>
    </>
  );
}

export default Dashboard;