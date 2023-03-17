import Talk from 'talkjs';
import React, { useState, useEffect, useRef } from "react";
import "./ChatComponent.css"
import ShipmentsService from "../../services/shipments.service";
import { useParams } from "react-router-dom";


function DriverChatComponent() {
  const chatboxEl = useRef();
  const [shipmentAuthorID, setShipmentAuthorID] = useState({});
  const [shipmentAuthorEmail, setShipmentAuthorEmail] = useState({});
  // const [shipmentAuthorImageURL, setShipmentAuthorImageURL] = useState({});
 

  const { id } = useParams();
  const senderUserID = `${shipmentAuthorID}`;
  const senderUserEmail = `${shipmentAuthorEmail}`;
  // const senderUserImageURL = `${shipmentAuthorImageURL}`;


  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

   
  useEffect(() => {
    const shipmentsService = new ShipmentsService();
    shipmentsService
      .getShipmentById(id)

      .then((response) => {
        setShipmentAuthorID(response.data.author._id);
        setShipmentAuthorEmail(response.data.author.email);
        // setShipmentAuthorImageURL(response.data.author.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '1',
        name: 'Henry Mill',
        email: 'henrymill@example.com',
        photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: senderUserID,
        name: "Chat with the sender",
        email: senderUserEmail,
        photoUrl: 'https://www.shutterstock.com/image-photo/happy-elegant-mature-senior-aged-260nw-2067036776.jpg',
        welcomeMessage: `Hello! In order to start our negotiation, please give me a pricerange for my offer. Please don't forget to add all your requiremets, and give me an approximate price for what I am asking. In the end, I will accept or decline your offer to close the deal.`,
        role: 'default',
      });

      const session = new Talk.Session({
        appId: 'tdU8Q2dM',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <>
      <div ref={chatboxEl} className="chatbox"/>;
    </>
  ) 
}

export default DriverChatComponent;