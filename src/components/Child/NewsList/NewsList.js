import React, { Component } from "react";
import "./NewsList.css";
import NewsBox from "./NewsBox/NewsBox";
import { getAllStores } from "../../../services/storeService";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrStores: [],
    };
  }

  async componentDidMount() {
    await this.getAllStoresLocation();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.arrStores !== this.state.arrStores) {
      await this.getAllStoresLocation();
    }
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
      <div className="news-list-scroll">
        {arrStores &&
          arrStores.length > 0 &&
          arrStores.map((item, index) => {
            let imageBase64 = "";
            if (item.image) {
              imageBase64 = new Buffer(item.image, "base64").toString("binary");
            }
            return (
              <div>
                <div className="bookCD-body">
                  <div
                    className="bookCF-image"
                    style={{ backgroundImage: `url(${imageBase64})` }}
                  ></div>
                  <div className="bookCF-name">{item.name}</div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default NewsList;
