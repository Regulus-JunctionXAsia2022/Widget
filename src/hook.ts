import { useEffect } from "react";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { initialize, updateFriendship, updateHiddenStatus } from "./store/zep";
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
              dispatch(
                updateFriendship({
                  friendship: e.data.data.friendship,
                }),
              );
              break;
            case "initialize":
              dispatch(initialize(e.data.data));
              break;
            case "checkHide":
              dispatch(updateHiddenStatus(e.data.data.hide));
              break;
            default:
              break;
          }
        }
      },
    );
    window.parent.postMessage({ type: "initialize" }, "*");
    window.parent.postMessage({ type: "checkHide" }, "*");
  }, []);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
