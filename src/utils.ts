type ChildMessage = { type: "close" | "getHeart" };
type ParentMessage = { type: "name"; data: string };

export const postMessage = (message: ChildMessage) => {
  window.parent.postMessage(message, "*");
};
