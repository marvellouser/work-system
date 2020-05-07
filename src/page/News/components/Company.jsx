import React from "react";
import NewsItem from "./NewsImte";
import HeadTitle from "../../../components/HeadTitle";
import Paging from "./Paging";
import { companyList } from "./data";
export default class Company extends React.PureComponent {
  render() {
    const news = companyList.map((news, index) => (
      <NewsItem key={index} {...news} />
    ));
    return (
      <div>
        <HeadTitle title="公司动态" />
        {news}
        <Paging pagesNum={1} />
      </div>
    );
  }
}
