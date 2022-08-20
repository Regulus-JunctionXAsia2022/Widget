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
        friendShip: 100,
      },
    ],
  },
  reducers: {
    updateFriendShip: (
      state,
      action: PayloadAction<{ id: number; friendShip: number }>,
    ) => {
      const { id, friendShip } = action.payload;
      const zep = state.zep.find((z) => z.id === id);
      if (zep) {
        zep.friendShip = friendShip;
      }
    },
  },
});

export const { updateFriendShip } = zepSlice.actions;
export const zepReducer = zepSlice.reducer;
