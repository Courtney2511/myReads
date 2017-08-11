import React, { Component } from 'react'

class ShelfChanger extends Component {

  render() {
    return (
      <form>
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </form>
    )
  }
}

export default ShelfChanger
