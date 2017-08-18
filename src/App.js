import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    // get all books and set state for the categories
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

// this is kind of hacky but works for now (FIX THIS)
  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(console.log("backend updated"))
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              <Route exact path="/" render={ () => (
                <div>
                  <BookShelf
                    shelfTitle="Currently Reading"
                    books={ this.state.books.filter((book) => book.shelf === 'currentlyReading') }
                    updateBookshelf={ this.updateBookshelf }
                  />
                  <BookShelf
                    shelfTitle="Want To Read"
                    books={ this.state.books.filter((book) => book.shelf === 'wantToRead') }
                    updateBookshelf={ this.updateBookshelf }
                  />
                  <BookShelf
                    shelfTitle="Read"
                    books={ this.state.books.filter((book) => book.shelf === 'read') }
                    updateBookshelf={this.updateBookshelf}
                  />
                </div>
              )} />
              <Route path="/search" component={ SearchBooks } />
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
