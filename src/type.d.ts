export type Pet = {
  id: number;
  name: string;
  user: string;
  friendship: number;
  created_at: string;
};

export type ParentMessage = {
  result: "success" | "failure";
} & (
  | {
      type: "updateFriendship";
      data: Pet;
    }
  | { type: "change" }
  | { type: "initialize"; data: Pet[] }
  | {
      type: "checkHide";
      data: {
        hide: boolean;
      };
    }
);
