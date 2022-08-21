import { AiFillCaretDown } from "react-icons/ai";
import "./SkinShop.scss";

const Merchandises = [
  {
    name: "Read Heart above Head",
    type: "Accessory, Dynamic",
    dollar: 0.99,
    zem: 500,
  },
  {
    name: "Pink Ribbon on Head",
    type: "Accessory, Static",
    dollar: 0.49,
    zem: 250,
  },
  {
    name: "Red Ribbon on Head",
    type: "Accessory, Static",
    dollar: 0.49,
    zem: 250,
  },
];

export const SkinShop = ({
  setShopOpened,
}: {
  setShopOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="left-over">
      <></>
      <div className="down-button">
        <AiFillCaretDown />
      </div>
    </div>
  );
};
