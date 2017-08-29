import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static PropTypes = {
    updateBookshelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  onChange = (e, value) => {
    e.preventDefault()
    this.props.updateBookshelf(this.props.book, e.target.value)
  }

  render() {
    return (
        <select defaultValue={this.props.book.shelf} id="shelfSelect" onChange={ this.onChange }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
    )
  }
}

export default ShelfChanger
