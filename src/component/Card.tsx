import "./Card.scss";

export const Card = (data: { name: string; dom: Date; dDay: string }) => {
  return (
    <div className="card">
      <div className="sprite"></div>
      <div className="info">
        <div className="name">{data.name}</div>
        <div className="dom">{data.dom.toLocaleDateString()}</div>
        <div className="dDay">{data.dDay}</div>
      </div>
    </div>
  );
};
