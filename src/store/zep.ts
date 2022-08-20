import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const zepSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: "Regulus" as const,
    currentPet: 1,
    zep: [
      {
        name: "Zepep",
        id: 1,
        friendship: 100,
      },
    ],
  },
  reducers: {
    updateFriendship: (
      state,
      action: PayloadAction<{ id: number; friendship: number }>,
    ) => {
      const { id, friendship } = action.payload;
      const zep = state.zep.find((z) => z.id === id);
      if (zep) {
        zep.friendship = friendship;
      }
    },
  },
});

export const { updateFriendship } = zepSlice.actions;
export const zepReducer = zepSlice.reducer;
