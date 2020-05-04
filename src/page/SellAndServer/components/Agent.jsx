import React from "react";

export default class Agent extends React.PureComponent {
  render() {
    return (
      <div className="agent">
        <div className="agent__slogn">
          <img
            className="slogn__img"
            src="http://www.kofler.com.cn/images/agent.JPG"
            alt="关于我们"
          />
        </div>
        <p className="agent__info" style={{ marginTop: "20px" }}>
          上海科菲勒电气有限公司致力于高中低压变配电电气及系统集成解决方案，多年来专注于研发、生产和销售双电源自动切换开关，控制与保护开关，万能式断路器，智能数显电力仪表，变频器，软启动，稳压器及调压器等低压配电电电气，以"为客户提供优质的产品和优良的服务"的企业宗旨，为国内众多房地产业、成套设备供应商、电器经销商提供优质的产品。其质量与实力得到众多用户的肯定，为产品的推广打下了良好而坚实的社会基础。现针对未设立经销商的区域诚邀代理加盟，具体条件如下：
        </p>
        <p className="agent__info">1、有良好的网点建设及维护能力</p>
        <p className="agent__info">2、有良好的市场品牌推广与渠道扩展能力</p>
        <p className="agent__info">
          3、有一定的营运资本，具有良好的服务意识与商业信誉
        </p>
        <p className="agent__info">详情请来电咨询：400-0799-628</p>
      </div>
    );
  }
}
