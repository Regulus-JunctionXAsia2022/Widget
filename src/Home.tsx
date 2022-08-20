import { Lion, YawnLion } from "./assets";
import { AiFillHeart } from "react-icons/ai";
import "./Home.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "./utils";

const Home = () => {
  const { currentPet } = useAppSelector((state) => ({
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
          window.parent.postMessage(
            {
              type: "updateFriendship",
              friendship: currentPet.friendship + 1,
            },
            "*",
          );
          setClicked(true);
        }}
      >
        <AiFillHeart size={32} />
      </button>
      <div className="friendship-container">
        <div className="friendship">{currentPet.friendship}</div>
      </div>
    </div>
  );
};

export default Home;
