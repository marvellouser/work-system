import React from "react";
import "./style.scss";
import InfoBox from "../../../components/InfoBox";

export default class Company extends React.PureComponent {
  render() {
    const infoArr = [
      {
        title: "公司愿景",
        items: ["致力于成为中国低压电气一流的生产供应商"],
      },
      {
        title: "公司使命",
        items: [
          "坚持不断创新、引进和学习创新，成为电气行业的技术领导者；",
          "坚持优化管理、提高效率，为客户提供高品质、性价比最优的产品与服务；",
          "坚持国际化战略，成为输配电业务的总包商。",
        ],
      },
      {
        title: "公司战略",
        items: [
          "坚持不断创新、引进和学习创新，成为电气行业的技术领导者；",
          "坚持优化管理、提高效率，为客户提供高品质、性价比最优的产品与服务；",
          "坚持国际化战略，成为输配电业务的总包商。",
        ],
      },

      {
        title: "公司核心价值观",
        items: [
          "客户利益至上，最大限度满足客户需求；",
          "尊重员工，充分考虑员工个人的自我发展，让员工乐在工作中；",
          "对每一项经营活动，以长期效益最大化为原则。",
        ],
      },
      {
        title: "企业精神",
        items: ["认真、求实、团结、创新"],
      },
      {
        title: "企业作风",
        items: [
          "实事求是；",
          "密切联系客户与员工，从客户中来、到客户中去，从员工中来，到员工中去；",
          "批评与自我批评，我们牢记最大的敌人是自己；",
          "来自市场竞争的压力要无衰减地传递到每一个部门和每一位员工。",
        ],
        showLine: false,
      },
    ];
    const info = infoArr.map((info) => <InfoBox {...info} key={info.title} />);
    return (
      <div className="company">
        <div className="company__slogn">
          <img
            className="slogn__img"
            src="http://www.kofler.com.cn/images/about.JPG"
            alt="关于我们"
          />
        </div>

        <div className="company__info">{info}</div>
      </div>
    );
  }
}
