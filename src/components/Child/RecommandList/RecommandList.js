import React, { Component } from "react";
import "./RecommandList.css";
import RecommandBox from "./RecommandBox/RecommandBox";

class RecommandList extends Component {
  render() {
    return (
      <div className="recommand-container">
        <div className="recommand-column-1">
          <div className="item recommand-1">
            <RecommandBox />
          </div>
          <div className="item recommand-2">
            <RecommandBox />
          </div>
          <div className="item recommand-3">
            <RecommandBox />
          </div>
        </div>

        <div className="recommand-column-2">
          <div className="item recommand-4">
            <RecommandBox />
          </div>
          <div className="item recommand-5">
            <RecommandBox />
          </div>
          <div className="item recommand-6">
            <RecommandBox />
          </div>
        </div>
      </div>
    );
  }
}

export default RecommandList;
