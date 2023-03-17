import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';
import "./ChatComponent.css"

function SenderChatComponent() {
  const chatboxEl = useRef();

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
        name: 'Chat with the Driver',
        email: 'jessicawells@example.com',
        photoUrl: 'https://m.atcdn.co.uk/ect/media/052715efad00428fb513428b6ea8de36.jpg',
        welcomeMessage: 'Hi. I saw your shipment request, and I would be interested. I can do the shipment for 200€ per pallet if they weight less than 300kg, with a 20€ surplus per kilo, until a maximum of 350 per pallet. Only european pallet sizes accepted.',
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

      const chatbox = session.createInbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div ref={chatboxEl} className="chatbox" />;
}

export default SenderChatComponent;