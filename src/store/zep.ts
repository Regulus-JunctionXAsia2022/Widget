import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const zepSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: "Regulus" as const,
    currentPet: {
      name: "Regulus" as const,
      id: 1,
      friendship: 100,
    },
  },
  reducers: {
    updateFriendship: (
      state,
      action: PayloadAction<{ friendship: number }>,
    ) => {
      state.currentPet.friendship = action.payload.friendship;
    },
  },
});

export const { updateFriendship } = zepSlice.actions;
export const zepReducer = zepSlice.reducer;
