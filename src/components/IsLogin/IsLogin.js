import React, { Component } from "react";
import "./IsLogin.css";
import Logo from "../../assets/cophee-icon.png";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/profile.png";
import Navigator from "../../components/Navigator";

// import { adminMenu } from "../../containers/Header/menuApp";

class IsLogin extends Component {
  render() {
    return (
      <div className="top-nav-box">
        <div className="top-nav-bar">
          <div class="logo">
            <img src={Logo} href="" alt="Logo" />
          </div>
          <div className="main-nav">
            <li>
              <a class="home-btn" href="/home/user">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/location/user">Quán cà phê</a>
            </li>
            <li>
              <a href="/aboutus/user">Về chúng tôi</a>
            </li>
          </div>
          <div className="profile-img">
            <Link to={"/home/user"}>
              <img src={ProfileImg} alt="Profile"></img>
              {/* <Navigator menus={adminMenu} /> */}
            </Link>
          </div>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm quán cà phê tại đây..."
            id="search-bar"
          />
          <button type="submit" id="search-btn" style={{ fontWeight: 600 }}>
            <i class="fas fa-search"></i>
          </button>
        </div>

        <div className="recommend-container">
          <p>#phuong 8</p>
          <p>#phuong 2</p>
          <p>#view dep</p>
          <p>#hung vuong</p>
          <p>#phu dong</p>
          <p>#sang trong</p>
          <p>#chill</p>
          <p>#thuc an</p>
          <p>#ngon</p>
        </div>
      </div>
    );
  }
}

export default IsLogin;
