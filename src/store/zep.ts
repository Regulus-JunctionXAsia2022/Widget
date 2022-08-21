import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../type";

export const zepSlice = createSlice({
  name: "auth",
  initialState: {
    currentPetIndex: 0,
    isHidden: false,
    pets: [] as Pet[],
  },
  reducers: {
    updateFriendship: (
      state,
      action: PayloadAction<{ friendship: number }>,
    ) => {
      state.pets[state.currentPetIndex].friendship = action.payload.friendship;
    },
    initialize: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
    },
    decreaseCurrentIdx: (state, action: PayloadAction<void>) => {
      state.currentPetIndex = Math.max(0, state.currentPetIndex - 1);
    },
    increaseCurrentIdx: (state, action: PayloadAction<void>) => {
      state.currentPetIndex = Math.min(
        state.pets.length - 1,
        state.currentPetIndex + 1,
      );
    },
    updateHiddenStatus: (state, action: PayloadAction<boolean>) => {
      state.isHidden = action.payload;
    },
  },
});

export const {
  updateFriendship,
  initialize,
  decreaseCurrentIdx,
  increaseCurrentIdx,
  updateHiddenStatus
} = zepSlice.actions;
export const zepReducer = zepSlice.reducer;
