import "./Premesis.Styles.scss";
import { useState } from "react";

export default function PremesisA() {
  const [isToggled, setIsToggled] = useState(false);

  const PremiseInfoA = [
    {
      key: 1,
      title: `Premise 1`,
      text: `All beings (Angels, Humans,
        Demons) have a general faith in God (James 2:19).`,
    },
    {
      key: 2,
      title: `Premise 2`,
      text: `The dark ages (321AD - 325AD)
        have corrupted the scriptures so that we don't know the truth.`,
    },
    {
      key: 3,
      title: `Premise 3`,
      text: `Faith is only one part of
        salvation but human works are required to complete it, in this case the
        "new passover" that Jesus instituted in the gosples at the last supper,
        specifically in John 6:54.`,
    },
    {
      key: 4,
      title: `Premise 4`,
      text: `Situations like the thief on the cross or a deathbed repentance (this includes any
        person that accepts Jesus Christ right before they die) or even Romans
        4:1-15 that speaks of Abraham being justified by faith not works are
        "special cases". However, anyone else not part of these "special cases"
        is not saved by faith alone in Christ alone, they must keep the passover
        to the exact specifications or they are not saved, regardless of faith in Christ.`,
    },
  ];

  const premiseBtnHandlerA = async (index) => {
    setIsToggled((prevPremesis) => ({
      ...prevPremesis,
      [index]: !prevPremesis[index],
    }));
  };

  return (
    <div className="premise-container-a info-containers-a">
      <h3 className="titles">Arguments (from Emmanual)</h3>
      {PremiseInfoA.map((info, index) => {
        return (
          <div key={info.key}>
            <li style={{ listStyle: "none" }}>
              <button
                type="button"
                className="buttons-a premise-btns"
                onClick={() => premiseBtnHandlerA(index)}
              >
                {info.title}
              </button>
              {isToggled[index] && (
                <div className="body-text-a">{info.text}</div>
              )}
            </li>
          </div>
        );
      })}
    </div>
  );
}
