import React from "react";
import "./style.scss";
function InfoBox(props) {
  const { title, items, showLine = true } = props;
  const info = items.map((item) => (
    <div className="info-box__info__box-item" key={item}>
      {item}
    </div>
  ));

  return (
    <>
      <div className="info-box__info__box">
        <div className="info-box__info__box-title">{title}</div>
        {info}
      </div>
      {showLine && (
        <div className="info-box__info__line">
          <img src="http://www.kofler.com.cn/images/nx3.jpg" alt="" />
        </div>
      )}
    </>
  );
}

export default InfoBox;
