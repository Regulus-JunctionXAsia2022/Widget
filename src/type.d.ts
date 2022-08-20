export type Pet = {
  id: number;
  name: string;
  user: string;
  friendship: number;
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
);
