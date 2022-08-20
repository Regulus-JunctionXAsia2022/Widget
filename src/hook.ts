import { useEffect } from "react";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { ParentMessage } from "./type";

export const useMessageListener = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    window.addEventListener(
      "message",
      function (e: MessageEvent<ParentMessage>) {
        if (e.data.result === "success") {
          switch (e.data.type) {
            case "updateFriendship":
              dispatch({
                type: "updateFriendship",
                payload: {
                  id: e.data.data.id,
                  friendship: e.data.data.friendship,
                },
              });
              break;
            default:
              break;
          }
        } else {
        }
      },
    );
  }, []);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
