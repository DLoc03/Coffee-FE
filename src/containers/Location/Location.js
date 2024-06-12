import React, { Component } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Footer from "../../components/Footer/footer";
import "./Location.css";
import StoreBox from "../../components/Child/StoreBox/StoreBox";
import { getAllStores } from "../../services/storeService";

class LocationLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrStores: [],
    };
  }

  async componentDidMount() {
    await this.getAllStoresLocation();
  }

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

  render() {
    let arrStores = this.state.arrStores;
    return (
      <div className="all-list-container">
        <div className="top-nav">
          <TopNav />
        </div>

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
                    <div className="store-name">{item.name}</div>
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
