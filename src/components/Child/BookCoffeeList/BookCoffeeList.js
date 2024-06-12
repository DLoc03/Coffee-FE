import React, { Component } from "react";
import BookCoffeeBox from "./BookCoffeeBox/BookCoffeeBox";
import "./BookCoffeeList.css";
import { extendWith } from "lodash";
import { getAllStores } from "../../../services/storeService";

class BookCoffeeList extends Component {
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
      <div className="book-cf-scroll">
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

export default BookCoffeeList;
