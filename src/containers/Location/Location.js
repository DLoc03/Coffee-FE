import React, { Component } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Footer from "../../components/Footer/footer";
import "./Location.css";
import StoreBox from "../../components/Child/StoreBox/StoreBox";

class LocationLogin extends Component {
  render() {
    return (
      <div className="all-list-container">
        <div className="top-nav">
          <TopNav />
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

export default LocationLogin;
