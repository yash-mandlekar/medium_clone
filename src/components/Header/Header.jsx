import React from "react";
import Roundedbtn from "../Ui/Roundedbtn";
import HeaderCss from "../Header/Header.module.css";
const Header = () => {
  return (
    <>
      <div
        className={`${HeaderCss.header}`}
        style={{ backgroundColor: `#FFC017` }}
      >
        <div className={`${HeaderCss.lefty}`}>
          <h1>Stay Curious.</h1>
          <h4>
            Discover stories, thinking, and expertise from writers on any topic.
          </h4>
          <Roundedbtn
            style={{ padding: "0.7vmax 0" }}
            className="curvy_box"
            inRound="Start Reading"
          />
        </div>
        <div className={`${HeaderCss.animations_text}`}>
          <div className="loader">
            <div className="load load1"></div>
            <div className="load load2"></div>
            <div className="load load3"></div>
            <div className="load load4"></div>
            <div className="load load5"></div>
            <div className="load load6"></div>
            <div className="load load7"></div>
            <div className="load load8"></div>
            <div className="load load9"></div>
            <div className="load load1 dele"></div>
            <div className="load load2 dele"></div>
            <div className="load load3 dele"></div>
            <div className="load load4 dele"></div>
            <div className="load load5 dele"></div>
            <div className="load load6 dele"></div>
            <div className="load load7 dele"></div>
            <div className="load load8 dele"></div>
            <div className="load load9 dele"></div>
            <div className="load load1 dele2"></div>
            <div className="load load2 dele2"></div>
            <div className="load load3 dele2"></div>
            <div className="load load4 dele2"></div>
            <div className="load load5 dele2"></div>
            <div className="load load6 dele2"></div>
            <div className="load load7 dele2"></div>
            <div className="load load8 dele2"></div>
            <div className="load load9 dele2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
