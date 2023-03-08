import React from 'react';
import '../../App.css';

function LandingPage() {
  return (
    <>
      <div className="HomeStructure">
        <header>
            <h1>Shipping of Pallets - Drivers and Senders</h1>
            <p>Do you want to send a pallet? Register as Driver or Sender!</p>
            <button>Sign Up</button>
            </header>
            <main>
            <section>
                <h2>What do we do specifically?</h2>
                <p>We are a company that connects Drivers (truck drivers) and Senders (people who need to send pallets). We take care of facilitating contact between both parties and guaranteeing a safe and efficient service for sending pallets nationally and internationally.</p>
            </section>

            <section>
                <h2>How to Send a Pallet?</h2>
                <p>To send a European, American or special pallet, it is important to follow a series of guidelines regarding the palletization and placement of the goods:</p>
                <ul>
                    <li>Make sure the base pallet you are going to use is in good condition.</li>
                    <li>Take into account the weight that will be on top of the pallet and whether it will be able to support the load.</li>
                    <li>Place the heaviest and bulkiest goods on the bottom and the lighter and smaller ones on top.</li>
                    <li>Protect the goods and make sure they will not move during transportation.</li>
                    <li>Check the load and give your approval to start shipping your pallets.</li>
                </ul>

                <h3>Tips for Sending Pallets at the Best Price</h3>
                <p>When sending a pallet, it is important to take into account the weight and size of the goods, as well as the destination and shipping method. Here are some tips for sending pallets at the best price:</p>
                <ul>
                    <li>Compare prices from different shipping companies and platforms.</li>
                    <li>Choose the most suitable type of pallet for your goods.</li>
                    <li>Optimize the use of space on the pallet.</li>
                    <li>Consider consolidating your shipment with other Senders to reduce costs.</li>
                </ul>

                <h3>Common Mistakes When Sending Pallets</h3>
                <p>When sending a pallet, there are several common mistakes that can lead to problems during transportation:</p>
                <ul>
                    <li>Not securing the goods properly: one of the most common problems when sending palletized goods is that they move during transportation, which can cause damage to the products. To avoid this, make sure the boxes are properly placed on the pallet and use appropriate packaging materials.</li>
                    <li>Choosing the wrong size of pallet: the size of the pallet should be chosen based on the specific needs of the shipment and the characteristics of the goods.</li>
                    <li>Not considering the environment: the environment through which the goods will pass during transportation should be taken into account, and appropriate measures should be taken to protect the goods from factors such as humidity or temperature fluctuations.</li>
                </ul>
            </section>
        </main>
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

export default LandingPage;