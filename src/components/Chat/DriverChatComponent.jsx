import Talk from 'talkjs';
import React, { useState, useEffect, useContext, useRef } from "react";
import "./ChatComponent.css"
import ShipmentsService from "../../services/shipments.service";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";


function DriverChatComponent() {
  const chatboxEl = useRef();
  const [shipment, setShipment] = useState({});
  const { id } = useParams();
  const { user, authenticateUser, isTransportist, getToken } = useContext(AuthContext);

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '1',
        name: 'Henry Mill',
        email: 'henrymill@example.com',
        photoUrl: 'henry.jpeg',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '2',
        name: 'Jessica Wells',
        email: 'jessicawells@example.com',
        photoUrl: 'jessica.jpeg',
        welcomeMessage: 'Hello!',
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
  useEffect(() => {
    const shipmentsService = new ShipmentsService(getToken());
    shipmentsService
      .getShipmentById(id)

      .then((response) => {
        setShipment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <div ref={chatboxEl} className="chatbox"/>;
    </>
  ) 
}

export default DriverChatComponent;