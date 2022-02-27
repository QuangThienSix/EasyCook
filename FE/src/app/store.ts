import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import productReducer from "./ProductSilce";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
