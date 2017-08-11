import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static PropTypes = {
    currentlyReading: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { currentlyReading } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { currentlyReading.map((book) =>
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf

// <div className="list-books">
//   <div className="list-books-content">
//     <div>
//       <CurrentlyReading books={ this.props.currentlyReading } />
//       <WantToRead />
//       <Read />
//     </div>
//   </div>
//   <div className="open-search">
//     <Link to="/search">Add a book</Link>
//   </div>
// </div>
