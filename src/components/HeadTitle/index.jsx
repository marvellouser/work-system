import React from "react";
import "./style.scss";
function HeadTitle(props) {
  const { title, showLine = true } = props;
  return (
    <div className="head__title">
      <div className="head__title-title">{title}</div>
      {showLine && <div className="head__title-line"></div>}
    </div>
  );
}
export default HeadTitle;
