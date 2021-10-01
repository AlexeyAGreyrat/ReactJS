import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Profile/profileSlice";
import chatReducer from "./Chat/chatModel";
import thunkMiddleware from "redux-thunk";
import pictureReducer from "./Picture/pictureSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
    picture: pictureReducer,
  },
  middleware: [thunkMiddleware],
});
