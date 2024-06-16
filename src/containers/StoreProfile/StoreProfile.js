import Logo from "../../assets/cophee-icon.png";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/profile.png";
import "./StoreProfile.css";
import Footer from "../../components/Footer/footer";
import React, { Component } from "react";
import AvtProfile from "../../assets/about-us-image.png";

class StoreProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeImage: AvtProfile,
    };
  }
  render() {
    return (
      <div className="storepr-container">
        <div className="top-nav">
          <div className="top-nav-box">
            <div className="top-nav-bar">
              <div class="logo">
                <img src={Logo} href="/home/user" alt="Logo" />
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
                {/* <li>
              <a href="/aboutus/user">Về chúng tôi</a>
            </li> */}
              </div>
              <div className="profile-nav">
                <div className="profile-img">
                  <img src={ProfileImg} alt="Profile"></img>
                  <Link to={"/home/user"}></Link>
                </div>
                <div class="profile-list">
                  <a href="/user">Hồ sơ của bạn</a>
                  <a href="/home">Đăng xuất</a>
                </div>
              </div>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Tìm quán cà phê? Nhấn vào nút bên cạnh nhé."
                id="search-bar"
                disabled
              />
              <Link to={"/location/user"}>
                <button
                  type="button"
                  id="search-btn"
                  style={{ fontWeight: 600 }}
                >
                  <i class="fas fa-search"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="storeInfo-body">
          <div className="storepf-title">Đăng ký thông tin quán cà phê</div>
          <div className="storeInfo-text">
            <div className="storeInfo-avt">
              <div className="input-container">
                <div
                  className="storeAvt"
                  style={{ backgroundImage: `url(${this.state.storeImage})` }}
                ></div>
                <input className="upload-avt" type="file" value={null} />
              </div>
            </div>
            <div className="storeInfo-input">
              <div className="input-container">
                <label>Tên quán</label>
                <input type="text" placeholder="Cafe Con Chồn,...v.v" />
              </div>
              <div className="input-container">
                <label>Số điện thoại liên hệ</label>
                <input type="text" placeholder="" />
              </div>
              <div className="input-container">
                <label>Địa chỉ</label>
                <input type="text" placeholder="Cafe Con Chồn,...v.v" />
              </div>
              <div className="input-container">
                <label>Đường link truyền thông</label>
                <input type="text" placeholder="Tiktok, Facebook,...v.v" />
              </div>
              <div className="storePf-btn">
                <button type="submit">Đăng ký</button>
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

export default StoreProfile;
