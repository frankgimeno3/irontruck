import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';
import "./ChatComponent.css";
import ShipmentsService from "../../services/shipments.service";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function DriverChatComponent() {
  const chatboxEl = useRef();
  const [senderUser, setSenderUser] = useState({});
  const [shipment, setShipment] = useState({});
  const [talkLoaded, setTalkLoaded] = useState(false);
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    Talk.ready.then(() => setTalkLoaded(true));
    const shipmentsService = new ShipmentsService("your-token-here");
    shipmentsService.getShipmentById(id)
      .then((response) => {
        console.log("wachicha", response.data)
        setShipment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    if (talkLoaded && currentUser) {
      const otherUser = new Talk.User({
        id: shipment.driver_id,
        name: shipment.driver_name,
        email: shipment.driver_email,
        photoUrl: shipment.driver_photo_url,
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
  }, [talkLoaded, currentUser, shipment]);

  return <div ref={chatboxEl} className="chatbox" />;
}

export default DriverChatComponent;