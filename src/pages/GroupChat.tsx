import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatBubbles from "../components/ChatBubbles";
import Header from "../components/Header";
import { authStateType, ConversationType } from "../types";
import { getConversations } from "../utiles/apis";

const GroupChat = () => {
  const token = useSelector((state: authStateType) => state.auth.token);
  const [conversations, setConversation] = useState<ConversationType[]>([]);

  const getAllConversation = async () => {
    await getConversations(token, setConversation);
  };

  useEffect(() => {
    getAllConversation();
  }, []);
  return (
    <section>
      <Header name={`Conversations`} />
      <div className="bgg" style={{ overflow: "auto" }}>
        {conversations.map((conversation) => (<div key={conversation.id} className='mt-3'><ChatBubbles  conversation={conversation} /></div>
          
        ))}
      </div>
    </section>
  );
};

export default GroupChat;
