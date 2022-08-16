import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import chat from "../assets/Chat.jpg";
import ChatBubbles from "../components/ChatBubbles";
import Header from "../components/Header";
import { authStateType, ConversationType } from "../types";
import { getConversations } from "../utiles/apis";

const GroupChat = () => {
  const token=useSelector((state:authStateType)=>state.auth.token)
  const [conversations,setConversation]=useState<ConversationType[]>([])

  const getAllConversation=async()=>{
    await getConversations(token,setConversation)
  }

  useEffect(()=>{
    getAllConversation()

  },[])
 
  return (
    <section>
      <Header name={`Conversations`} />
      <div className="bgg" style={{overflow: 'auto'}}>
        {conversations.map((conversation)=>(<ChatBubbles key={conversation.id} conversation={conversation} />))}
       
      </div>
      
      
      </section>
  );
};

export default GroupChat;
