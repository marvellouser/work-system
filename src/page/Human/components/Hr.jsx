import React from "react";
import HeadTitle from "../../../components/HeadTitle";

export default class Hr extends React.PureComponent {
  render() {
    return (
      <div className="hr">
        <HeadTitle title="人才招聘" />
        <div className="hr__job-tab">
          <div className="hr__job-tab-title">
            <div className="hr__job-tab-name">职位名称</div>
            <div className="hr__job-tab-place">工作地点</div>
            <div className="hr__job-tab-date">更新日期</div>
          </div>
          <div className="hr__job-tab-item">
            <div className="hr__job-tab-item-name"></div>
            <div className="hr__job-tab-item-place"></div>
            <div className="hr__job-tab-item-date"></div>
          </div>
        </div>
      </div>
    );
  }
}
