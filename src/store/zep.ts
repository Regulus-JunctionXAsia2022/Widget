import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../type";

export const zepSlice = createSlice({
  name: "auth",
  initialState: {
    currentPetIndex: 0,
    pets: [
      {
        id: 1,
        name: "Leo",
        user: "Regulus",
        friendship: 101,
      },
      {
        id: 2,
        name: "Mocha",
        user: "Regulus",
        friendship: 101,
      },
    ] as Pet[],
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
  },
});

export const {
  updateFriendship,
  initialize,
  decreaseCurrentIdx,
  increaseCurrentIdx,
} = zepSlice.actions;
export const zepReducer = zepSlice.reducer;
