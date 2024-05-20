import React, { Component } from "react";
import BookCoffeeBox from "./BookCoffeeBox/BookCoffeeBox";
import "./BookCoffeeList.css";
import { extendWith } from "lodash";

class BookCoffeeList extends Component {
  render() {
    return (
      <div className="book-cf-scroll">
        <div className="scrl book-cf1">
          <BookCoffeeBox />
        </div>

        <div className="scrl book-cf2">
          <BookCoffeeBox />
        </div>

        <div className="scrl book-cf3">
          <BookCoffeeBox />
        </div>

        <div className="scrl book-cf4">
          <BookCoffeeBox />
        </div>

        <div className="scrl book-cf5">
          <BookCoffeeBox />
        </div>
      </div>
    );
  }
}

export default BookCoffeeList;
