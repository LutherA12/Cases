import "./Inconsistencies.Styles.scss";
import { useState } from "react";

export default function InconsistenciesA() {
  const [isToggled, setIsToggled] = useState(false);

  const InconsistentInfoA = [
    {
      key: 1,
      title: `Titus 3:4-7`,
      text: `This passage is a direct contradiction to the premises
            above & specifically states that we are saved "not becuase of
            righteous things we had done, but because of His mercy (His being
            God's)`,
    },
    {
      key: 2,
      title: `Ephesians 2:8, 9 (the famous passage)`,
      text: `"For it is by grace you have
            been saved, through faith and this is not from yourselves, it is the
            gift of God, not by works, so that no one can boast." Again, another
            direct contradicting passage of scripture to the premesis above
            stating that we are saved by faith alone, not works.`,
    },
    {
      key: 3,
      title: `Acts 16:29-31`,
      text: `"The jailer called for lights, rushed in and fell
            trembling before Paul and Silas. He then brought them out and asked,
            “Sirs, what must I do to be saved?” They replied, “Believe in the
            Lord Jesus, and you will be saved—you and your household.”" Here we
            have another contradiction to the premesis above. Did Paul just lie
            to the jailer? Telling him that he only needed to believe in faith?
            Why not mention the passover & that it needs to be kept as well? Why
            leave that part out?`,
    },
    {
      key: 4,
      title: `Romans 4:1-15`,
      text: `I recommend reading the entire passage, but I want
            to highlight verse 3 "What does Scripture say? “Abraham believed
            God, and it was credited to him as righteousness.”" Notice, not
            "Abraham believe God but more was still needed". Now in context this
            is mentioning the OT & at the time this happened the new passover
            wasn't initiated yet, but that is irrelivant since the passover was
            still part of the old covenent. Why not mention something that
            important? This is salvation we are talking about, we die without the certainty of this information.`,
    },
    {
      key: 5,
      title: `Galatians 2:15, 16`,
      text: `"We who are Jews by birth and not sinful Gentiles know that a person is not justified by the works of the law, 
      but by faith in Jesus Christ. So we, too, have put our faith in Christ Jesus that we may be justified by faith in Christ &
      not by the works of the law, because by the works of the law no one will be justified." I'm not sure how much clearer it can be made,
      we cannot be saved by keeping the law (the passover in this case),
      but by putting our faith alone in Jesus Christ alone.`,
    },
  ];

  const inconsistentBtnHandlerA = async (index) => {
    setIsToggled((prevInconsistencies) => ({
      ...prevInconsistencies,
      [index]: !prevInconsistencies[index],
    }));
  };

  return (
    <div className="inconsistent-container-a info-containers-a">
      <h3 className="titles">Biblical Passage Inconsistancies</h3>
      {InconsistentInfoA.map((info, index) => {
        return (
          <div key={info.key}>
            <li style={{ listStyle: "none" }}>
              <button
                type="button"
                className="buttons-a inconsistent-btns"
                onClick={() => inconsistentBtnHandlerA(index)}
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
