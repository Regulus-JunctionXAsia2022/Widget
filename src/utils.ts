import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export type ChildMessage =
  | { type: "close" }
  | { type: "updateFriendShip"; number: 100 };
export type ParentMessage = {
  result: "success" | "failure";
} & (
  | {
      type: "updateFriendShip";
      data: {
        id: number;
        name: string;
        user: string;
        friendship: number;
      };
    }
  | { type: "change" }
);

export const postMessage = (message: ChildMessage) => {
  window.parent.postMessage(message, "*");
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
