import React, { useEffect } from "react";
import ChatBubbles from "../components/ChatBubbles";
import Header from "../components/Header";
import { AppProps } from "../types";
import { getConversations } from "../utiles/apis";
import { useAppSelector } from "../redux/app/hookes";
import { useDispatch } from "react-redux";
import { setConversationsFilter } from "../redux/features/conversationSlice";
import { useNavigate } from "react-router";
import { handelLogout } from "../redux/features/authSlice";

const GroupChat = ({ socket }: AppProps) => {
  const token = useAppSelector((state) => state.auth.token);
  const expire = useAppSelector((state) => state.auth.expire);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const conversations = useAppSelector(
    (state) => state.conversation.conversations
  );
  const conversationFilter = useAppSelector(
    (state) => state.conversation.conversationsFilter
  );
  const getAllConversation = async () => {
    console.log(token)
    await getConversations(token, dispatch);
  };

  const searchFilter = (value: string) => {
    const conversationsFilter = conversations.filter((conversation) =>
      conversation.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setConversationsFilter(conversationsFilter));
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
