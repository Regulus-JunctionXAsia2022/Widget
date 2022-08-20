import { Lion, YawnLion } from "./assets";
import { AiFillHeart } from "react-icons/ai";
import "./First.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "./utils";

const First = () => {
  const { zep, currentPet } = useAppSelector((state) => ({
    zep: state.zep.zep,
    currentPet: state.zep.currentPet,
  }));
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    }
  }, [clicked]);

  return (
    <div className="card">
      {clicked ? <YawnLion size={96} /> : <Lion size={96} />}
      <button
        onClick={() => {
          postMessage({
            type: "updateFriendShip",
            number:
              (zep.find((ele) => ele.id == currentPet)?.friendShip as number) +
              1,
          });
          setClicked(true);
        }}
      >
        <AiFillHeart size={32} />
      </button>
      <div className="friendShip-container">
        <div className="friendShip">
          {zep.find((ele) => ele.id == currentPet)?.friendShip as number}
        </div>
      </div>
    </div>
  );
};

export default First;
