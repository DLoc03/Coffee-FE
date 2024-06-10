import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import IsLogin from "../../components/IsLogin/IsLogin";
import Footer from "../../components/Footer/footer";
import "./Profile.css";
import ProfileImg from "../../assets/profile.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="top-nav">
          <IsLogin />
        </div>
        <div className="profile-container">
          <div className="profile-avt">
            <img src={ProfileImg}></img>
          </div>
          <div className="profile-detail">
            <div className="profile-header">Thông tin</div>
            <div className="profile-ctn">
              <div className="profile-text">
                <p>Nguyễn Lộc</p>
                <p>loc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Profile;
