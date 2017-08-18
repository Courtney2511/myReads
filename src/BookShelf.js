import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    updateBookshelf: PropTypes.func.isRequired
  }


  render() {
    const { books, shelfTitle, updateBookshelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfTitle }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) =>
              <Book key={ book.id }book={ book } updateBookshelf={ updateBookshelf} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf

// <li key={ book.id }>
//   <div className="book">
//     <div className="book-top">
//       <div className="book-cover" style={
//           {
//             width: 128,
//             height: 192,
//             backgroundImage: `url(${book.imageLinks.thumbnail})`
//           }
//       }>
//       </div>
//       <div className="book-shelf-changer">
//         <ShelfChanger onChangeShelf={this.changeShelf} />
//       </div>
//     </div>
//     <div className="book-title">{book.title}</div>
//     <div className="book-authors">{book.author}</div>
//   </div>
// </li>
