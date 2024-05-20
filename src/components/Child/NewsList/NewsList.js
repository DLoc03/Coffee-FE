import React, { Component } from "react";
import "./NewsList.css";
import NewsBox from "./NewsBox/NewsBox";

class NewsList extends Component {
  render() {
    return (
      <div className="news-list-scroll">
        <div className="nws news-image-scroll-1">
          <NewsBox />
        </div>

        <div className="nws news-image-scroll-2">
          <NewsBox />
        </div>

        <div className="nws news-image-scroll-3">
          <NewsBox />
        </div>

        <div className="nws news-image-scroll-4">
          <NewsBox />
        </div>

        <div className="nws news-image-scroll-5">
          <NewsBox />
        </div>
      </div>
    );
  }
}

export default NewsList;
