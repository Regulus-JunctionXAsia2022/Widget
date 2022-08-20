import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img
          src={
            "data:image/png;base64,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"
          }
          width={104}
          height={70}
          title="zepep"
        />
        <AiOutlineCloseCircle
          onClick={() => {
            window.parent.postMessage({ type: "close" }, "*");
          }}
        />
      </div>
      <div className="introduction">ZEPEP since 22.08.21. </div>
    </div>
  );
};
