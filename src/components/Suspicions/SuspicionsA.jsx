import "./Suspicions.Styles.scss";
import { linebreak } from "../../helpers/Data";
import { useState } from "react";

export default function SuspicionsA() {
  const [isToggled, setIsToggled] = useState(false);

  const suspiciousBtnHandlerA = () => {
    setIsToggled(!isToggled);
  };

  const sneakyInfo = {
    title: <div className="headers">My Sneaking Suspicion</div>,
    text: (
      <>
        When you visited me to study I saw that the bible you were reading had
        the words of Jesus in red while all other words were in black. That is
        fine if that is the bible you choose to read, however, my suspicion is
        that you are weighing the words in red as more important or more
        valuable than others when in 2 Timothy 3:16, 17 we are clearly told "All
        Scripture is God-breathed and is useful for teaching, rebuking,
        correcting and training in righteousness, so that the servant of God may
        be thoroughly equipped for every good work."{linebreak} {linebreak} That
        passage in Timothy is ironically not written in red ink so that lends
        itself to my theory & explains how you could have arrived at the
        conclution you have, especially due to the fact that there are so many
        scriptures that speak in contrary to what you are saying and
        subsequently none of those passages are in red ink either. Unless you
        simply forgot that the passage in Timothy exists or you're trying to
        interperate a different meaning from it?
        {linebreak} {linebreak} The point is, while it's true that human hands
        wrote scripture, it is all directly inspired by God. I mentioned this
        before, but scripture does not contradict other scripture. The bible is
        one whole book & it's meant to be read, studied & understood that way.
        As soon as you try & take parts of scripture away or ignore them,
        everything else starts to fall apart (this is for core concepts of
        scripture of course, such as salvation) {linebreak} {linebreak} I hope
        this isn't the case & you are rightly dividing the word of God. The
        apostles words hold just as much weight as the words of Jesus (in red)
        because they are the words of Jesus & come directly from His teachings
        which the apostles were willing to die for, those words are simply being
        spoken by different people just as we still speak them now.
      </>
    ),
  };

  return (
    <div className="suspicious-container-a info-containers-a">
      <button
        type="button"
        className="buttons-a suspicious-btns"
        onClick={suspiciousBtnHandlerA}
      >
        {sneakyInfo.title}
      </button>
      {isToggled && <div className="body-text-a">{sneakyInfo.text}</div>}
    </div>
  );
}

/**
 * import { useState, useRef } from "react";
 *   const [isToggled, setIsToggled] = useState(false);
 * 
 *   const suspiciousBtnHandlerA = () => {
    setIsToggled(!isToggled);
  };
 * 
 * <h3 className="titles">{sneakyInfo.title1}</h3>
      <button
        type="button"
        className="buttons-a"
        onClick={suspiciousBtnHandlerA}
      >
        {sneakyInfo.title2}
      </button>
      {isToggled && <div className="body-text-a">{sneakyInfo.text}</div>}
 * 
 */
