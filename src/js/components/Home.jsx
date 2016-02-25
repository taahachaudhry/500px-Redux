import React from 'react'
import SearchForm from '../components/SearchForm'

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
}

Home.displayName = 'Home'

export default Home
