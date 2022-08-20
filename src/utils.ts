type childMessage = { type: "close" | "getHeart" }};
type parentMessage = { type: "name"; data: string };

export const postMessage = (message: childMessage) => {
  window.parent.postMessage(message, "*");
};
