import { Lion, YoungLion } from "../assets";
import "./Card.scss";

export const Card = ({
  name,
  dom,
  dDay,
}: {
  name: string;
  dom: string;
  dDay: string;
}) => {
  return (
    <div className="card">
      <div className="sprite">
        {name === "Mocha" ? <YoungLion /> : <Lion size={65} />}
      </div>
      <div className="info">
        <div className="name">Name: {name}</div>
        <div className="dom">
          DOM: {`22.${dom.substring(5, 7)}.${dom.substring(8, 10)}`}
        </div>
        <div className="dDay">D+Day: {dDay}</div>
      </div>
    </div>
  );
};
