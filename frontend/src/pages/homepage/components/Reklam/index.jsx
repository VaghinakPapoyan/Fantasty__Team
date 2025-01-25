import "./index.scss";
import image from "../../../../assets/images/homeIpad.png";
import Line1 from "../../../../assets/images/Line-1-1.svg";
import Line2 from "../../../../assets/images/Line-1-2.svg";
import Line3 from "../../../../assets/images/Line-1-3.svg";
import Line4 from "../../../../assets/images/Line-1-4.svg";
import useInView from "../../../../utils/useInView.js";

export function HomeSection() {
  const [line1Ref, is1Visible] = useInView(0, { threshold: 0.3 });
  const [line2Ref, is2Visible] = useInView(0, { threshold: 0.4 });
  const [line3Ref, is3Visible] = useInView(0, { threshold: 0.6 });
  const [line4Ref, is4Visible] = useInView(0, { threshold: 0.7 });

  return (
    <div className="reklam">
      <div className="placeholder" ref={line1Ref}></div>
      <div className="placeholder" ref={line2Ref}></div>
      <div className="placeholder" ref={line3Ref}></div>
      <div className="placeholder" ref={line4Ref}></div>
      <div className={is1Visible ? "line-visible line1" : "line1"}>
        <img src={Line1} alt="line" />
      </div>
      <div className={is2Visible ? "line-visible line2" : "line2"}>
        <img src={Line2} alt="line" />
      </div>
      <div className={is3Visible ? "line-visible line3" : "line3"}>
        <img src={Line3} alt="line" />
      </div>
      <div className={is4Visible ? "line-visible line4" : "line4"}>
        <img src={Line4} alt="line" />
      </div>
      <div className="container">
        <img src={image} alt="" />
        <div className="content">
          <div className="content__title">You're so close!</div>
          <div className="content__line"></div>
          <div className="content__text">
            Choose a league, build your dream team, and start winning.
          </div>
          <div className="content__text2">
            Using your allocated budget, build your best 11-man team and choose
            a captain. Players' prices are based on real match odds
          </div>
        </div>
      </div>
    </div>
  );
}
