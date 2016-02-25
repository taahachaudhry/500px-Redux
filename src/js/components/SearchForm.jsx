import React       from 'react'
import { Link }        from 'react-router'
import Input       from './Input'
import Button      from './Button'

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Tags"
        />
        <Input
          placeholder="Locations"
        />
        <Link to='/results'>
          <Button>Search</Button>
        </Link>
      </div>
    );
  }
}

SearchForm.displayName = 'SearchForm'

export default SearchForm
