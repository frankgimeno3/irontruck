import React from 'react';
import '../../App.css';
import './LandingPage.css';
import { Link } from "react-router-dom";
import videoBg from "../../assets/production ID_5200378.mp4";

function LandingPage() {
    return (
        <>

            <div className="homepage-video-overlay">

                <section id="sect1" className="sect">

                    <video src={videoBg} autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video>

                    <div className="buttons">
                        <Link to="transportist/login"><button type="button" className="btn btn-primary btn-lg">Log In as a Carrier</button></Link>
                        <Link to="/login"><button type="button" className="btn btn-secondary btn-lg">Log In as a Sender</button></Link>
                    </div>

                </section>




            </div>



            <div className="LandingStructure">
                <header >
                    <h2>Send pallets or merchandise efficiently, make a request and receive an offer!</h2>
                    <div className='headerStructure'>
                        <div className="CallButtons">
                            <div className='smallboxes'>
                                <p>Do you want to send a pallet? Register as a Sender, post your request, receive offers from drivers and choose the best one.</p>
                                <Link to="/signup"><button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Sign Up</span>
                                </button>
                                </Link>
                            </div>
                            <div className='smallboxes'>
                                <p>Do you have a truck? Do you need to find new customers? Are you sending a cargo and have an empty space and want to sell it? Create an account as a a driver, look for requests and get a profit from the empty spaces in your truck</p>
                                <Link to="transportist/signup"><button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Sign Up</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section >
                        <h2>About Irontruck</h2>
                        <p id="aboutirontruck">At Irontruck, we firmly believe that the logistics industry has a responsibility to minimize its environmental impact and promote sustainability. We understand that our operations can have significant ecological consequences, and we are committed to reducing our carbon footprint through optimized routes and sustainable practices. Our mission is not only to provide exceptional shipping services but also to do so in a way that contributes towards a cleaner and more sustainable future for all..</p>
                    </section>

                    <h2>Send pallets or merchandise efficiently, make a request and receive an offer!</h2>
                    <div className='headerStructure'>
                        <div className="CallButtons">
                            <div className='smallboxes'>
                                <p>Do you want to send a pallet? Register as a Sender, post your request, receive offers from drivers and choose the best one.</p>
                                <Link to="/signup"><button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Sign Up</span>
                                </button>
                                </Link>
                            </div>
                            <div className='smallboxes'>
                                <p>Do you have a truck? Do you need to find new customers? Are you sending a cargo and have an empty space and want to sell it? Create an account as a a driver, look for requests and get a profit from the empty spaces in your truck</p>
                                <Link to="transportist/signup"><button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Sign Up</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <section>
                        <h3>How to Send a Pallet?</h3>
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
                        <h3>Common Mistakes When Sending Pallets</h3>
                        <div className="Guidelines">
                            <h4>When sending a pallet, there are several common mistakes that can lead to problems during transportation:</h4>
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
                    <a href="/">Legal notice</a>
                </div>
                <div className="cookies-policy">
                    <a href="/">Cookie policy</a>
                </div>
                <div className="contact-us">
                    <a href="/">Contact</a>
                </div>
                <div className="copyright">
                    © 2023 All rights reserved.
                </div>
            </footer>


        </>
    );
}

export default LandingPage;