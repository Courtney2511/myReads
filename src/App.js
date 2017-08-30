import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import SearchBooks from "./SearchBooks";
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // get all books and set state for the categories
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }

  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(shelfIds => {
      this.setState(state => {
        return {
          books: state.books.map(b => {
            if (shelfIds.currentlyReading.includes(b.id)) {
              return { ...b, shelf: "currentlyReading" }
            } else if (shelfIds.wantToRead.includes(b.id)) {
              return { ...b, shelf: "wantToRead" }
            } else if (shelfIds.read.includes(b.id)) {
              return { ...b, shelf: "read" }
            } else {
              return { ...b, shelf: "none" }
            }
          })
        };
      });
    });
  };

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Route
              exact path="/"
              render={() => (
                <div>
                  <BookShelf
                    shelfTitle="Currently Reading"
                    books={books.filter(
                      book => book.shelf === "currentlyReading"
                    )}
                    updateBookshelf={this.updateBookshelf}
                  />
                  <BookShelf
                    shelfTitle="Want To Read"
                    books={books.filter(
                      book => book.shelf === "wantToRead"
                    )}
                    updateBookshelf={this.updateBookshelf}
                  />
                  <BookShelf
                    shelfTitle="Read"
                    books={books.filter(
                      book => book.shelf === "read"
                    )}
                    updateBookshelf={this.updateBookshelf}
                  />
                </div>
              )}
            />
            <Route
              path="/search"
              render={() => (
                <SearchBooks
                  updateBookshelf={this.updateBookshelf}
                  books={books}
                />
              )}
            />
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp
