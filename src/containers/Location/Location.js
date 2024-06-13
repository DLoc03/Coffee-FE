import React, { Component } from "react";
// import TopNav from "../../components/TopNav/TopNav";
import Footer from "../../components/Footer/footer";
import "./Location.css";
import StoreBox from "../../components/Child/StoreBox/StoreBox";
import { getAllStores } from "../../services/storeService";
import { getAllUsers } from "../../services/userService";
import Logo from "../../assets/cophee-icon.png";
import { Link } from "react-router-dom";

class LocationLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrStores: [],
      arrUsers: [],
      storeSearch: "",
      storeResult: [],
    };
  }

  async componentDidMount() {
    await this.getAllStoresLocation();
    await this.getAllUserLocation();
  }

  handleOnchangeSearch = (event) => {
    this.setState({
      storeSearch: event.target.value,
    });
    console.log(event.target.value);
  };

  getStoreByKey = async () => {
    // let response = await getAllStores("ALL");
    // if (response.data.store.name == this.state.storeSearch) {
    //   this.setState({
    //     storeResult: response.data.store,
    //   });
    //   console.log("Kết quả tìm kiếm: ", this.state.storeResult);
    // }
    console.log("Kết quả tìm kiếm: ", this.state.storeSearch);
    this.setState({
      storeSearch: "",
    });
  };

  getAllStoresLocation = async () => {
    let response = await getAllStores("ALL");
    if (response.data && response.data.errCode === 0) {
      this.setState(
        {
          arrStores: response.data.store,
        },
        () => {
          console.log("Check state stores", this.state.arrStores);
        }
      );
    }
  };

  getAllUserLocation = async () => {
    let response = await getAllUsers("ALL");
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
    let arrStores = this.state.arrStores;
    let arrUsers = this.state.arrUsers;
    let storeSearch = this.state.storeSearch;

    return (
      <div className="all-list-container">
        <div className="top-nav">
          <div className="top-nav-bar">
            <div class="logo">
              <img src={Logo} href="/home" alt="Logo" />
            </div>
            <div className="main-nav">
              <li>
                <a class="home-btn" href="/home">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/listall">Quán cà phê</a>
              </li>
              {/* <li>
              <a href="/aboutus">Về chúng tôi</a>
            </li> */}
            </div>
            <div className="login-nav">
              <Link to={"/userlogin"}>
                <button type="submit" className="login-btn" id="login-btn">
                  Đăng nhập
                </button>
              </Link>
              <div className="half"></div>
              <Link to={"/resigter"}>
                <button className="resigter-btn" id="resigter-btn">
                  Đăng ký
                </button>
              </Link>
            </div>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Tìm quán cà phê tại đây..."
              id="search-bar"
              onChange={(event) => {
                this.handleOnchangeSearch(event);
              }}
              value={this.state.storeSearch}
            />
            <button
              type="submit"
              id="search-btn"
              style={{ fontWeight: 600 }}
              onClick={this.getStoreByKey}
            >
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
        <div className="search-result">{this.state.storeResult}</div>
        <div className="all-list">
          {arrStores &&
            arrStores.length > 0 &&
            arrStores.map((item, index) => {
              let imageBase64 = "";
              if (item.image) {
                imageBase64 = new Buffer(item.image, "base64").toString(
                  "binary"
                );
              }
              return (
                <div>
                  <div className="store-body">
                    <div
                      className="store-img"
                      style={{ backgroundImage: `url(${imageBase64})` }}
                    ></div>
                    <div className="store-content">
                      <div className="store-name">{item.name}</div>
                      {arrUsers &&
                        arrUsers.length > 0 &&
                        arrUsers.map((userItem, index) => {
                          if (item.userID === userItem.id) {
                            return (
                              <div className="store-info">
                                <div className="store-username">
                                  Chủ quán: {userItem.userName}
                                </div>
                                <div className="store-adress">
                                  Địa chỉ: {item.address}
                                </div>
                                <div className="store-telephone">
                                  Liên hệ: {item.telephone}
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default LocationLogin;
