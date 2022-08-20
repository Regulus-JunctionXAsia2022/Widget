import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export type ParentMessage = {
  result: "success" | "failure";
} & (
  | {
      type: "updateFriendship";
      data: {
        id: number;
        name: string;
        user: string;
        friendship: number;
      };
    }
  | { type: "change" }
);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
