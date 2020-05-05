import React from "react";
import "./style.scss";
import InfoBox from "../../../components/InfoBox";
import HeadTitle from "../../../components/HeadTitle";
export default class Joinus extends React.PureComponent {
  render() {
    const infoArr = [
      {
        title: "人才培养理念",
        items: [
          "◆ 做员工成长的促进者,做企业发展的推动者。",
          "◆ 成为优秀人才的塑造者，为企业持续发展提供充足、胜任的人才。",
          "◆ 建立以人才成长为主线，以业绩为导向的系统化人力资源管理体系。",
        ],
        showLine: false,
      },
      {
        title: "成就明天，从你开始！",
        items: [],
        showLine: false,
      },
    ];
    const info = infoArr.map((info) => <InfoBox key={info.title} {...info} />);
    return (
      <div className="joinus">
        <HeadTitle title="人力资源" />
        <div className="joinus__slogn">
          <img
            className="slogn__img"
            src="http://www.kofler.com.cn/images/join.JPG"
            alt="关于我们"
          />
        </div>
        <div className="joinus__info">
          <p className="joinus__info-con">
            上海科菲勒电气有限公司深信员工是企业发展的首要资源，是构成公司核心竞争力的重要组成要素。科菲勒非常重视员工的成长，认为员工的成长与公司的成长是互为基础、互相促进的。
          </p>
          <p className="joinus__info-con">
            我们欣赏踏实肯干的人，更欣赏勇于创新的人。我们希望我们的员工是发自内心地认同我们的文化，热爱我们的工作，激情投入，不断创造辉煌。我们为你提供的不仅仅是一份工作，而是一份事业，一个能让你充分发挥特长、才智和创造力的舞台。相信明天就在自己手中，努力吧！
          </p>
          {info}
        </div>
      </div>
    );
  }
}
