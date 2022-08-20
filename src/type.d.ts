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
