import { AiFillCaretUp, AiFillCaretDown, AiFillHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../hook";
import { decreaseCurrentIdx, increaseCurrentIdx } from "../store/zep";
import { Pet } from "../type";
import { Card } from "./Card";
import "./PetList.scss";
import { BarWave } from "react-cssfx-loading";

export const PetList = ({
  setShopOpened,
}: {
  setShopOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { pets, currentPetIndex } = useAppSelector((state) => ({
    pets: state.zep.pets,
    currentPetIndex: state.zep.currentPetIndex,
  }));

  const dispatch = useAppDispatch();

  const convertedPets: (Parameters<typeof Card>[0] & Pet)[] = pets.map(
    (pet) => {
      return { ...pet, dom: pet.created_at, dDay: "0m 1d" };
    },
  );

  return (
    <div className="left-over">
      {pets.length > 0 ? (
        <>
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
        </>
      ) : (
        <BarWave color="#6758ff" />
      )}
      <div className="divider" />
      <div
        className="friendship-button"
        onClick={() => {
          window.parent.postMessage(
            {
              type: "updateFriendship",
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
      <div
        className="edit-button"
        onClick={() => {
          setShopOpened((state) => !state);
        }}
      >
        Edit Profile
      </div>
    </div>
  );
};
