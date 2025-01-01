import "./ArgumentsA.Styles.scss";
import { useState } from "react";
import { ArgumentDataA } from "../../helpers/Data";

export default function ArgumentsA() {
  const [isToggled, setIsToggled] = useState(false);

  const btnHandlerA = async () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="arguments-container-a info-containers-a">
      {" "}
      <button
        type="button"
        className="btn-a arguments-btns"
        onClick={btnHandlerA}
      >
        {ArgumentDataA.title}
      </button>
      {isToggled && <div className="body-text-a">{ArgumentDataA.text}</div>}
    </div>
  );
}
