import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} book={book} updateBookshelf={this.props.updateBookshelf}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.PropTypes = {
  books: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  updateBookshelf: PropTypes.func.isRequired
}

export default BookShelf;
