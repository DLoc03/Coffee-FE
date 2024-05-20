import React, { Component } from "react";
import IsLogin from "../../components/IsLogin/IsLogin";
import Footer from "../../components/Footer/footer";
import StoreBox from "../../components/Child/StoreBox/StoreBox";

class Location extends Component {
  render() {
    return (
      <div className="all-list-container">
        <div className="top-nav">
          <IsLogin />
        </div>

        <div className="all-list">
          <StoreBox />
          <StoreBox />
          <StoreBox />
          <StoreBox />
          <StoreBox />
          <StoreBox />
          <StoreBox />
          <StoreBox />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Location;
