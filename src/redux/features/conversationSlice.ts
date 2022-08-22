import { ConversationActionType, ConversationType } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";
const initialState: { conversations: ConversationType[] } = {
  conversations: [],
};
export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    AddConversation: (state, action: ConversationActionType) => {
      state.conversations = action.payload.conversations;
    },
  },
});
export const { AddConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
