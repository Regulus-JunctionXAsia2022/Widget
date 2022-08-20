import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown, AiFillHeart } from "react-icons/ai";
import { Card } from "./Card";
import "./PetList.scss";

export const PetList = () => {
  const [currentPetNumber, setCurrentPetNumber] = useState(0);

  const pets: Parameters<typeof Card>[0][] = [
    {
      name: "Mocha",
      dom: new Date(2020, 1, 1),
      dDay: "0m 1d",
    },
    {
      name: "Latte",
      dom: new Date(2020, 1, 1),
      dDay: "0m 1d",
    },
  ];
  return (
    <div className="left-over">
      <div className="up-button">
        <AiFillCaretUp />
      </div>
      <Card {...pets[currentPetNumber]} />
      <div className="down-button">
        <AiFillCaretDown />
      </div>
      <div className="divider" />
      <div className="friendship-button">
        <div className="heart-icon">
          <AiFillHeart />
        </div>
        <div className="text">
          <strong>32k</strong> people love him
        </div>
      </div>
      <div className="edit-button">Edit Profile</div>
    </div>
  );
};
