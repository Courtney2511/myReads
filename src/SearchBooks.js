import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    console.log("query", query)
    this.setState({ query: query })
    // sends the query to search API, and returns matching books
    if (query) {
      this.fetchBooks(query)
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
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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

export default SearchBooks
