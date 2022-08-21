import {
  AiFillCaretUp,
  AiFillCaretDown,
  AiFillHeart,
  AiFillHome,
} from "react-icons/ai";
import { FaDog } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  decreaseCurrentIdx,
  increaseCurrentIdx,
  updateHiddenStatus,
} from "../store/zep";
import { Pet } from "../type";
import { Card } from "./Card";
import "./PetList.scss";
import { BarWave } from "react-cssfx-loading";

export const PetList = ({
  setShopOpened,
}: {
  setShopOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { pets, currentPetIndex, isHidden } = useAppSelector((state) => ({
    pets: state.zep.pets,
    currentPetIndex: state.zep.currentPetIndex,
    isHidden: state.zep.isHidden,
  }));

  const dispatch = useAppDispatch();

  const convertedPets: (Parameters<typeof Card>[0] & Pet)[] = pets.map(
    (pet) => {
      return { ...pet, dom: pet.created_at, dDay: "0m 1d" };
    },
  );

  return (
    <div className="left-over">
      <div className="introduction">ZEPEP since 22.08.21. </div>
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
              <strong>{convertedPets[currentPetIndex].friendship}</strong>{" "}
              people love him
            </div>
          </div>
          <div
            className="hide-button"
            onClick={() => {
              if (isHidden) {
                window.parent.postMessage(
                  {
                    type: "show",
                  },
                  "*",
                );
                dispatch(updateHiddenStatus(false));
              } else {
                window.parent.postMessage(
                  {
                    type: "hide",
                  },
                  "*",
                );
                dispatch(updateHiddenStatus(true));
              }
            }}
          >
            <div className="home-icon">
              {isHidden ? <FaDog /> : <AiFillHome />}
            </div>
            <div className="text">
              {isHidden ? "Take walk with him" : "Take him into Home"}
            </div>
          </div>
        </>
      ) : (
        <BarWave
          color="#6758ff"
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      )}
      <div
        className="edit-button"
        onClick={() => {
          setShopOpened((state) => !state);
        }}
      >
        Shop
      </div>
    </div>
  );
};
