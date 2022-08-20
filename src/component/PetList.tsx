import { useEffect } from "react";
import { AiFillCaretUp, AiFillCaretDown, AiFillHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../hook";
import { decreaseCurrentIdx, increaseCurrentIdx } from "../store/zep";
import { Pet } from "../type";
import { Card } from "./Card";
import "./PetList.scss";

export const PetList = () => {
  const { pets, currentPetIndex } = useAppSelector((state) => ({
    pets: state.zep.pets,
    currentPetIndex: state.zep.currentPetIndex,
  }));

  const dispatch = useAppDispatch();

  const convertedPets: (Parameters<typeof Card>[0] & Pet)[] = pets.map(
    (pet) => {
      return { ...pet, dom: new Date(2020, 1, 1), dDay: "0m 1d" };
    },
  );

  return (
    <div className="left-over">
      <div
        className="up-button"
        onClick={() => {
          dispatch(increaseCurrentIdx());
        }}
      >
        <AiFillCaretUp />
      </div>
      <Card {...convertedPets[currentPetIndex]} />
      <div
        className="down-button"
        onClick={() => {
          dispatch(decreaseCurrentIdx());
        }}
      >
        <AiFillCaretDown />
      </div>
      <div className="divider" />
      <div
        className="friendship-button"
        onClick={() => {
          window.parent.postMessage(
            {
              type: "updateFriendShip",
              name: convertedPets[currentPetIndex].name,
              friendship: convertedPets[currentPetIndex].friendship + 1,
              id: convertedPets[currentPetIndex].id,
            },
            "*",
          );
        }}
      >
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
