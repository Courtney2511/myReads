import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
  state = {
    currentShelf: this.props.book.shelf
  };

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${
                  (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) ? this.props.book.imageLinks.thumbnail : ''})`
              }}
            />
            <div className="book-shelf-changer">
              <ShelfChanger
                book={this.props.book}
                updateBookshelf={this.props.updateBookshelf}
              />
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>
    );
  }
}

export default Book;
