import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  state = {
    currentShelf: this.props.book.shelf
  }

  render() {
    console.log(this.props.book.title, this.props.book.shelf)
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={
                {
                  width: 128,
                  height: 192,
                  backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
                }
            }>
            </div>
            <div className="book-shelf-changer">
              <ShelfChanger />
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>
    )
  }
}

export default Book
