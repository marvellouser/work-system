import React from "react";
import Paging from "./Paging";
import { newsList } from "./data";
import NewsItem from "./NewsImte";
import HeadTitle from "../../../components/HeadTitle";
export default class News extends React.PureComponent {
  state = {
    currentPage: 0,
  };

  render() {
    const { currentPage } = this.state;
    const pagesNum = this.getPagesNum(newsList.length);
    const list = newsList.slice(currentPage * 10, currentPage * 10 + 10);
    console.log(list, ".......", currentPage * 10, currentPage * 10 + 10);
    const news = list.map((news, index) => <NewsItem key={index} {...news} />);
    return (
      <div>
        <HeadTitle title="行业新闻" />
        {news}
        <Paging
          pagesNum={pagesNum}
          onChange={(currentPage) => {
            this.setState({ currentPage });
            document.documentElement.scrollTop = document.body.scrollTop = 0;
          }}
        />
      </div>
    );
  }
  getPagesNum = (num) => {
    return Math.ceil(num / 10);
  };
}
