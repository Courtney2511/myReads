import React, { Component } from "react";
import PropTypes from 'prop-types'
import ShelfChanger from "./ShelfChanger";

class Book extends Component {

  render() {
    const { book, updateBookshelf } = this.props
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
                  (book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : ''})`
              }}
            />
            <div className="book-shelf-changer">
              <ShelfChanger
                book={ book }
                updateBookshelf={ updateBookshelf }
              />
            </div>
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.authors && book.authors.join(', ') }</div>
        </div>
      </li>
    )
  }
}

Book.PropTypes = {
  key: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  updateBookshelf: PropTypes.func.isRequired
}

export default Book;
