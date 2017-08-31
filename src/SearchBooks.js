import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    // sends the query to search API, and returns matching books
    if (query) {
      this.fetchBooks(query)
    }
    if (query === '') {
      this.setState( { searchResults: [] })
    }
  }

  getShelfForBookId = (id) => {
    const book = this.props.books.find((book) => book.id === id)
    return (book) ? book.shelf : 'none'
  }

  fetchBooks = (query) => {
    BooksAPI.search(query).then(response => {
      if (!response.error) {
        const resultsWithShelves = response.map((searchResult) => {
           return {...searchResult, shelf: this.getShelfForBookId(searchResult.id)}
         })
        this.setState({
          searchResults: resultsWithShelves
        })
      }
    })
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf books={ this.state.searchResults } updateBookshelf={this.props.updateBookshelf}/>
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.PropTypes = {
  updateBookshelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default SearchBooks
