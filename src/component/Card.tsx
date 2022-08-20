import { Lion } from "../assets";
import "./Card.scss";

export const Card = (data: { name: string; dom: Date; dDay: string }) => {
  return (
    <div className="card">
      <div className="sprite">
        <Lion size={65} />
      </div>
      <div className="info">
        <div className="name">Name: {data.name}</div>
        <div className="dom">DOM: {data.dom.toLocaleDateString()}</div>
        <div className="dDay">D+Day: {data.dDay}</div>
      </div>
    </div>
  );
};
