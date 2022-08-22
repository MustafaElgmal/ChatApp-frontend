import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBubbles from "../components/ChatBubbles";
import Header from "../components/Header";
import { AppProps, authStateType, ConversationType } from "../types";
import { getConversations } from "../utiles/apis";

const GroupChat = ({ socket }: AppProps) => {
  const dispatch = useDispatch();
  const token = useSelector((state: authStateType) => state.auth.token);
  const [conversations, setConversation] = useState<ConversationType[]>([]);
  const [conversationsFilter, setConversationFilter] = useState<ConversationType[]>([]);

  const getAllConversation = async () => {
    await getConversations(token, setConversation,setConversationFilter);
  };

  const searchFilter = (value: string) => {
    const conversationsFilter=conversations.filter((conversation)=>conversation.name.toLowerCase().includes(value.toLowerCase()))
    setConversationFilter(conversationsFilter)
  };

  useEffect(() => {
    getAllConversation();
    searchFilter("")
  }, []);

  
  return (
    <section>
      <Header name={`Conversations`} />
      <div className="main">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="searchFilter"
            onChange={(e) => {
              searchFilter(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
      </div>
      <div className="bgg" style={{ overflow: "auto" }}>
        {conversationsFilter.map((conversation) => (
          <div key={conversation.id} className="mt-3">
            <ChatBubbles conversation={conversation} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupChat;
