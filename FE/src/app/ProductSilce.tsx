import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IRecipe } from "types/types";

export interface ProductState {
  recipe?: IRecipe[];
  recipeView?: IRecipe[];
  recipeSeen?: IRecipe[];
}

const initialState: ProductState = {
  recipe: [],
  recipeView: [],
  recipeSeen: [],
};

const productSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    productSuccess(state, action: PayloadAction<IRecipe[]>) {
      state.recipe = action.payload;
    },
    liewViewSuccess(state, action: PayloadAction<IRecipe[]>) {
      state.recipeView = action.payload;
    },
    SeenSuccess(state, action: PayloadAction<IRecipe[]>) {
      state.recipeSeen = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export const selecttorsProduct = (state: RootState) => state.product.recipe;
export const selecttorsProductView = (state: RootState) => state.product.recipeView;
export const selecttorsProductrecipeSeen = (state: RootState) => state.product.recipeSeen;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
