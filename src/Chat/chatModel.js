import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    MessagesArray: [
      {
        time: "",
        msg: "",
        user: "",
        chatId: "",
      },
      {
        time: "",
        msg: "",
        user: "",
        chatId: "",
      },
      {
        time: "",
        msg: "",
        user: "",
        chatId: "",
      },
      {
        time: "",
        msg: "",
        user: "",
        chatId: "",
      },
    ],
  },
  reducers: {
    AddMessage: (state, action) => {
      state.MessagesArray = [
        ...state.MessagesArray,
        {
          time: action.payload.time,
          msg: action.payload.msg,
          user: action.payload.user,
          chatId: action.payload.chatId,
        },
      ];
    },
    changeIsAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },      
  },
});

export const { AddMessage,changeIsAuth } = chatSlice.actions;

export default chatSlice.reducer;
