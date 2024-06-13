import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import IsLogin from "../../components/IsLogin/IsLogin";
import Footer from "../../components/Footer/footer";
import "./Profile.css";
import ProfileImg from "../../assets/profile.png";
import { getAllUsers } from "../../services/userService";
import { getAllStores } from "../../services/storeService";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      arrUsers: [],
    };
  }

  componentDidMount() {
    console.log("Đây là trang thông tin người dùng");
    this.getUserInfo();
  }

  getUserInfo = async () => {
    let response = await getAllUsers("ALL");
    let userLogin = JSON.parse(localStorage.getItem("User"));
    if (userLogin) {
      this.setState({
        userInfo: userLogin,
      });
      console.log("Thông tin đã lấy từ local storage: ", this.state.userInfo);
    }
    if (response.data && response.data.errCode === 0) {
      this.setState(
        {
          arrUsers: response.data.users,
        },
        () => {
          console.log("Check state users", this.state.arrUsers);
        }
      );
    }
  };

  render() {
    let arrUsers = this.state.arrUsers;
    let userInfo = this.state.userInfo;
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
            <div className="profile-header">Hồ sơ người dùng</div>
            <div className="profile-ctn">
              {arrUsers &&
                arrUsers.length > 0 &&
                arrUsers.map((item, index) => {
                  if (item.email === userInfo.email) {
                    return (
                      <div className="profile-text">
                        <div className="profile-name">
                          Họ và tên: {item.userName}
                        </div>
                        <div className="profile-email">Email: {item.email}</div>
                      </div>
                    );
                  }
                })}
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
