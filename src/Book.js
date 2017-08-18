import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    key: PropTypes.string.isRequired,
  }


  changeShelf = (book, value) => {
    // take the value from the select options
    // update the shelf property of the book instance
    this.props.updateBookshelf(this.props.book, value)
  }

  render() {
    const { book } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={
                {
                  width: 128,
                  height: 192,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }
            }>
            </div>
            <div className="book-shelf-changer">
              <ShelfChanger book={ book }onChangeShelf={ this.changeShelf } />
            </div>
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.author }</div>
        </div>
      </li>
    )
  }
}

export default Book
