import { ConversationType } from './../../types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState:{conversations:ConversationType[],conversationsFilter:ConversationType[]} ={
    conversations:[],
    conversationsFilter:[]
}
export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setConversations:(state,action:PayloadAction<ConversationType[]>)=>{
        state.conversations=action.payload
    },
    addConversation:(state,action:PayloadAction<ConversationType>)=>{
        state.conversations=[...state.conversations,action.payload]
    },
    setConversationsFilter:(state,action:PayloadAction<ConversationType[]>)=>{
        state.conversationsFilter=action.payload
    },
    addConversationFilter:(state,action:PayloadAction<ConversationType>)=>{
      state.conversationsFilter=[...state.conversationsFilter,action.payload]
  },

  }
});
export const {setConversations,addConversation,setConversationsFilter,addConversationFilter} = conversationSlice.actions;
export default conversationSlice.reducer;
