import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    read: [],
    wantToRead: [],
    currentlyReading: []
  }

  componentDidMount() {
    // get all books and set state for the categories
    BooksAPI.getAll().then((books) => {
      this.setState({
        read: books.filter((book) => book.shelf === 'read'),
        wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
        currentlyReading: books.filter((book) => book.shelf === 'currentlyReading')
      })
      console.log(books)
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
                    title="Currently Reading"
                    books={ this.state.currentlyReading }
                  />
                  <BookShelf
                    title="Want To Read"
                    books={ this.state.wantToRead }
                  />
                  <BookShelf
                    title="Read"
                    books={ this.state.read }
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
