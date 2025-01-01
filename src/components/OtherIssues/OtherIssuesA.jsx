import "./OtherIssues.Styles.scss";
import { useState } from "react";

export default function OtherIssuesA() {
  const [isToggled, setIsToggled] = useState(false);

  const OtherInfoA = [
    {
      key: 1,
      title: `Issue 1`,
      text: `What would be the point of having a "special deathbed condition" for
            those that do not have the means (time, energy, resources, etc.) to
            properly celebrate the "new" passover to the exact standards?
            Why not just make it uniform & save everyone with the same standard?
            If you read scripture for long enough, you find out that God is a God of finality & order.`,
    },
    {
      key: 2,
      title: `Issue 2`,
      text: `Why make it more difficult than it already is to enter Heaven? 
      Matthew 7:13 tells us “Enter through the narrow gate.
      For wide is the gate and broad is the road that leads to destruction, and many enter through it.
      But small is the gate and narrow the road that leads to life, and only a few find it." Also, 2 Peter 3:9 says
      "The Lord is not slow in keeping his promise, as some understand slowness.
      Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance."
      Yet, this supposed biblical understanding about the new passover being necessary for salvation is simply not mentioned in many passages &
      is outright contradicted in others. What kind of God is that? How can you know which scriptures are true & which are not?`,
    },
    {
      key: 3,
      title: `Issue 3`,
      text: `Why contradict so many other passages of scripture that say we are saved
        by Faith alone in Christ alone? We've already touched on this in Issue 2 & I will mention this later because I have a theory about how you may be reading scripture.
        For now though let me say that no passage of scripture contradicts any other passage, instead, they deepen & embelish one another.`,
    },
    {
      key: 4,
      title: `Issue 4`,
      text: `Why is it that we are only obligated
        to keep part of the law (in this case the passover) when in other
        scriptures (James 2:10 & Galatians 2:15, 16 for example) it is very clear that we would need to keep the entire law
        perfectly from birth to death in order to earn salvation ourselves through works?`,
    },
  ];

  const otherBtnHandlerA = async (index) => {
    setIsToggled((prevOther) => ({
      ...prevOther,
      [index]: !prevOther[index],
    }));
  };

  return (
    <div className="other-container-a info-containers-a">
      <h3 className="titles">Other Inconsistancies</h3>
      {OtherInfoA.map((info, index) => {
        return (
          <div key={info.key}>
            <li style={{ listStyle: "none" }}>
              <button
                type="button"
                className="buttons-a other-btns"
                onClick={() => otherBtnHandlerA(index)}
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
