import React, { useEffect } from "react";
import ChatBubbles from "../components/ChatBubbles";
import Header from "../components/Header";
import { AppProps } from "../types";
import { getConversations } from "../utiles/apis";
import { useAppSelector } from "../redux/app/hookes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handelLogout } from "../redux/features/authSlice";
import  Search from "../components/Search"

const GroupChat = ({ socket }: AppProps) => {
  const token = useAppSelector((state) => state.auth.token);
  const expire = useAppSelector((state) => state.auth.expire);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const conversationFilter = useAppSelector(
    (state) => state.conversation.conversationsFilter
  );
  const getAllConversation = async () => {
    await getConversations(token, dispatch);
  };

  setTimeout(() => {
    dispatch(handelLogout());
    localStorage.removeItem("user");
    navigate("/");
  },expire);

  useEffect(() => {
    getAllConversation();
  }, []);

  return (
    <section>
      <Header name={`Conversations`} />
      
      <div className="bgg" style={{ overflow: "auto" }}>
      <Search />
        {conversationFilter.map((conversation) => (
          <div key={conversation.id} className="mt-3">
            <ChatBubbles conversation={conversation} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupChat;
