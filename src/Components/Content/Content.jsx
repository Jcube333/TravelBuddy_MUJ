import React from "react";
import blob from "../../img/blob.svg";
import "./Content.css";
import content from "../../img/content.png";

function Content() {
  return (
    <div className="Content">
      <div className="c-left">
        <span className="head">
          <span>Find. Contact.</span>
          <span> Commute.</span>
        </span>

        <span className="sub-head">What do we do?</span>

        <span className="desc">
          We are here to make your commute economical and enjoyable by
          connecting you with your TravelBuddy.
        </span>
        <button className="button c-button">Contact Us</button>
        <div className="blur c-blur"></div>
      </div>
      <div className="c-right">
        <img src={content} alt="" />
        <img src={blob} alt="" />
      </div>
    </div>
  );
}

export default Content;
