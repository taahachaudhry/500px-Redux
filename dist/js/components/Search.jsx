import React from 'react'
import SearchForm from '../components/SearchForm'

class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <div className="search-box">
          <SearchForm />
        </div>
      </div>
    )
  }
}

Search.displayName = 'Search'

export default Search
