import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import conversationReducer from '../features/conversationSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversation:conversationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
