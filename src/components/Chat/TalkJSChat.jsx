import React, { useEffect, useState } from 'react';
import Talk from 'talkjs';

const TalkJSChat = ({ currentUser, otherUser }) => {
  const [talkSession, setTalkSession] = useState(null);

  useEffect(() => {
    Talk.ready.then(() => {
      const me = new Talk.User(currentUser);
      const other = new Talk.User(otherUser);

      const session = new Talk.Session({
        appId: 'tdU8Q2dM',
        me,
      });

      const conversationId = Talk.oneOnOneId(me, other);
      const conversation = session.getOrCreateConversation(conversationId);

      conversation.setParticipant(me);
      conversation.setParticipant(other);

      setTalkSession(session);
    });
  }, []);

  return <div id="talkjs-container" style={{ height: '500px' }}></div>;
};

export default TalkJSChat;