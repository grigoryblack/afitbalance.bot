import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice.ts";
import userReducer from "./user/userSlices.ts";
import modalReducer from "./modal/modalSlice";

const persistConfig = {
  key: "root",
  storage,
};

const authPersistReducer = persistReducer(persistConfig, authReducer);
const userPersistReducer = persistReducer(persistConfig, userReducer);
const modalPersistReducer = persistReducer(persistConfig, modalReducer);

const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    user: userPersistReducer,
    modal: modalPersistReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
