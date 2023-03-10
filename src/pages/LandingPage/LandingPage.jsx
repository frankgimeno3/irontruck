import React from 'react';
import '../../App.css';
import './LandingPage.css';
import { Link } from "react-router-dom";


function LandingPage() {
    return (
        <>
            <img src="https://www.rlicorp.com/sites/default/files/banner-images/LossControl_WebsiteHeader_02_72dpi_1.jpg" alt="banner" className="landingjpg" />
            <div className="LandingStructure">
                <header >
                    <h1>Send pallets or merchandise efficiently, make a request and receive an offer!</h1>
                    <div className='headerStructure'>
                        <div className="CallButtons">
                            <div>
                                <p>Do you want to send a pallet? Register as a Sender, post your request, receive offers from drivers and choose the best one.</p>
                                <Link to="/signup"><button class="learn-more">
                                    <span class="circle" aria-hidden="true">
                                        <span class="icon arrow"></span>
                                    </span>
                                    <span class="button-text">Sign Up</span>
                                </button>
                                </Link>
                            </div>
                            <div>
                                <p>Do you have a truck? Do you need to find new customers? Are you sending a cargo and have an empty space and want to sell it? Create an account as a a driver, look for requests and get a profit from the empty spaces in your truck</p>
                                <Link to="/signup"><button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Sign Up</span>
                                </button>
                                </Link>                </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section>
                        <h2>About Irontruck</h2>
                        <p>We are a company that connects Drivers (truck drivers) and Senders (people who need to send pallets). We take care of facilitating contact between both parties and guaranteeing a safe and efficient service for sending pallets nationally and internationally.</p>
                    </section>

                    <section>
                        <h2>How to Send a Pallet?</h2>
                        <div className="Guidelines">
                            <h3>To send a European, American or special pallet, it is important to follow a series of guidelines regarding the palletization and placement of the goods:</h3>
                            <ul>
                                <li>Make sure the base pallet you are going to use is in good condition.</li>
                                <li>Take into account the weight that will be on top of the pallet and whether it will be able to support the load.</li>
                                <li>Place the heaviest and bulkiest goods on the bottom and the lighter and smaller ones on top.</li>
                                <li>Protect the goods and make sure they will not move during transportation.</li>
                                <li>Check the load and give your approval to start shipping your pallets.</li>
                            </ul>

                        </div>
                        <h2>Common Mistakes When Sending Pallets</h2>
                        <div className="Guidelines">
                            <h3>When sending a pallet, there are several common mistakes that can lead to problems during transportation:</h3>
                            <ul>
                                <li>Not securing the goods properly: one of the most common problems when sending palletized goods is that they move during transportation, which can cause damage to the products. To avoid this, make sure the boxes are properly placed on the pallet and use appropriate packaging materials.</li>
                                <li>Choosing the wrong size of pallet: the size of the pallet should be chosen based on the specific needs of the shipment and the characteristics of the goods.</li>
                                <li>Not considering the environment: the environment through which the goods will pass during transportation should be taken into account, and appropriate measures should be taken to protect the goods from factors such as humidity or temperature fluctuations.</li>
                            </ul>
                        </div>
                    </section>
                </main>
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
                <div className="copyright">
                    © 2023 Todos los derechos reservados.
                </div>
            </footer>
        </>
    );
}

export default LandingPage;