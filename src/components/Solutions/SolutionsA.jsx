import "./Solutions.Styles.scss";
import { useState } from "react";
import { linebreak } from "../../helpers/Data";

export default function SolutionsA() {
  const [isToggled, setIsToggled] = useState(false);

  const solutionInfoA = {
    title: `The Solution & Closing`,
    text: (
      <>
        As I've been saying all along scripture does not contradict itself, nor
        do any passages of scripture invalidate others. For example, Jesus
        initiating the new passover does not invalidate being saved by faith
        alone in Jesus Christ alone, those are two different things. {linebreak}{" "}
        {linebreak} In this case, while it is perfectly fine to celebrate the
        passover it is not a biblical requirement for salvation. The only
        requirement is faith alone in Christ alone as mentioned in many, many
        verses of scripture including the ones above. All other verses that
        mention salvation need to be understood in light of "we are saved by
        faith alone in Christ alone".
        {linebreak} {linebreak} The difference that we need to realize is in the
        usual case of someone being saved by faith they generally live long
        enough to do good works naturally, thus they are known by their fruits
        or works (Matthew 7:15-20) but that is only after they have come to a
        "saving" faith in Christ, not before because there are plenty of people
        that do good things, do not have faith in Jesus Christ & are not saved.{" "}
        {linebreak} {linebreak} Also, to your point about everyone having a
        general faith in God, there is a big difference between the faith that a
        demon has in God & the saving faith that we are given when pulled to
        Christ by God (John 6:44). Our saving faith spurs us on naturally to
        good works because we are forgiven by God. Jesus' rightousness is
        imparted to us & out of that appreciation we do good works for Him
        because we've been forgiven, not out of impulse or fear of damnation. We
        accept the gift of eternal life that is given to us by faith, demons do
        not. {linebreak} {linebreak} The passover is a wonderful event showing
        God's mercy & grace, but it is not a biblical requirement for salvation.
        Jesus was simply setting Himself up as the sacrificial lamb in this
        "new" passover & asking that His diciples (& by extention gentiles) to
        take part in that celebration because it's very good news that Jesus
        paid our sin debt in full! Salvation is faith alone in Christ alone any
        works on our part are simply the natural response to the gift of
        salvation that has been given to us. Saving faith first, then
        acceptance, then works.{linebreak} {linebreak} You also mentioned the
        Councel of Nicaea but I'm not sure if you figured they didn't do it
        right? Or they forgot something? Or they made a series of grave
        mistakes? I don't know, but the one question I would ask you is: do you
        really believe that God could not keep His word from being corrupted
        despite what humanity (& Satan) would try & do? {linebreak} {linebreak}{" "}
        Finally, I was surprised you didn't also mention the Protestant
        Reformation which similar to the Councel of Nicaea was someone standing
        up & saying "no, God & scripture are the final authority, not man".
        Neither the Councel nor the Reformation made up anything new,
        "discovered" a new teaching, or added to scripture, they simply
        recognized what was already there, what Jesus already taught & said
        "let's get back to that!"{linebreak} {linebreak} In closing, I do hope
        you read this. I mean no disrespect, but I want you to teach scripture
        properly. Give people the good news! Jesus saves by faith without cost
        because He already paid that price! Now, we can come to God unashamed &
        unafraid of damnation! We don't need to keep any rituals or routines,
        Christianity is a dynamic relationship with the God of the universe not
        a static religion full of rules & regulations that we need to adhere to.
      </>
    ),
  };

  const solutionBtnHandlerA = async () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="solutions-container-a info-containers-a">
      <button
        type="button"
        className="buttons-a solutions-btns"
        onClick={solutionBtnHandlerA}
      >
        {solutionInfoA.title}
      </button>
      {isToggled && <div className="body-text-a">{solutionInfoA.text}</div>}
    </div>
  );
}
