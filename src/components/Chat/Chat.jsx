import React from 'react';
import TalkJSChat from './TalkJSChat';

const ChatPage = () => {
  const currentUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    photoUrl: 'https://example.com/john.jpg',
    role: 'user'
  };

  const otherUser = {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    photoUrl: 'https://example.com/jane.jpg',
    role: 'user'
  };

  return (
     <TalkJSChat currentUser={currentUser} otherUser={otherUser} />
  )

};

export default ChatPage;