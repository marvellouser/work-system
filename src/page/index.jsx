import React from "react";
import Head from "../components/Head/index";
import { Route, Switch, Link } from "react-router-dom";
import Admin from "./Admin";
import "./style.scss";
import PageList from "./PageList";
export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <Head {...this.props} />
        <Switch>
          <Route path="/" exact component={Admin} />
          <Route path="/" component={PageList} />
        </Switch>
        <div className="footer">
          <div className="footer__con">
            <div className="footer__con-menu">
              <Link className="footer__con-item" to="/">
                网站首页
              </Link>
              <div className="footer__con-line"> | </div>
              <Link className="footer__con-item" to="/">
                {" "}
                双电源自动切换开关
              </Link>
              <div className="footer__con-line"> | </div>
              <Link className="footer__con-item" to="/">
                {" "}
                控制与保护开关
              </Link>
              <div className="footer__con-line"> | </div>
              <Link className="footer__con-item" to="/">
                数显电力仪表
              </Link>
              <div className="footer__con-line"> | </div>
              <Link className="footer__con-item" to="/">
                多功能谐波保护器
              </Link>
              <div className="footer__con-line"> | </div>
              <Link className="footer__con-item" to="/">
                负荷隔离开关
              </Link>
              <div className="footer__con-line"> | </div>
              <Link className="footer__con-item" to="/">
                {" "}
                万能式断路器{" "}
              </Link>
              <div
                style={{
                  width: "50px",
                  height: "12px",
                  marginLeft: "10px",
                }}
              >
                <img src="http://icon.cnzz.com/img/pic.gif" alt="" />
              </div>
            </div>

            <div className="footer__con__desc">
              <span className="footer__con__desc-text">
                Copyright © 2014 科菲勒电气 All right reserved.
              </span>
              <span className="footer__con__desc-text">
                经营许可证编号：沪ICP备12015727号{" "}
              </span>
              <span className="footer__con__desc-text">
                全国统一服务热线：400-0799-628
              </span>
            </div>

            <div className="footer__con__contact">
              <a
                className="footer__con__contact-link"
                target="blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=779217963&site=qq&menu=yes"
              >
                <img src="http://wpa.qq.com/pa?p=2:86672191:42" alt="" />
              </a>
              <a
                className="footer__con__contact-link"
                target="blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=779217963&site=qq&menu=yes"
              >
                <img src="http://wpa.qq.com/pa?p=2:86672191:42" alt="" />
              </a>
              <a
                className="footer__con__contact-link"
                target="blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=779217963&site=qq&menu=yes"
              >
                <img src="http://wpa.qq.com/pa?p=2:86672191:42" alt="" />
              </a>
              <a
                className="footer__con__contact-link"
                target="blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=779217963&site=qq&menu=yes"
              >
                <img src="http://wpa.qq.com/pa?p=2:86672191:42" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
