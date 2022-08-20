import { Lion, YawnLion } from "./assets";
import { AiFillHeart } from "react-icons/ai";
import "./First.scss";
import { useEffect, useState } from "react";

const First = () => {
  const [heart, setHeart] = useState(100);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    }
  }, [clicked]);

  return (
    <>
      <div className="card">
        {clicked ? <YawnLion size={96} /> : <Lion size={96} />}
        <button
          onClick={() => {
            window.parent.postMessage(
              {
                type: "getHeart",
              },
              "*",
            );
            setClicked(true);
          }}
        >
          <AiFillHeart size={25} />
        </button>
        <div className="heart-container">
          <div className="heart">{heart}</div>
        </div>
      </div>
    </>
  );
};

export default First;
