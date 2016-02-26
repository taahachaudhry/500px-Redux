import React           from 'react'
import { Link }        from 'react-router'
import Input           from './Input'
import Button          from './Button'

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          placeholder="Enter a tag to search:"
          className="search"
        />
        <Input
          placeholder="Enter a location to search:"
          className="search"
        />
        <Link to='/results'>
          <Button>Search</Button>
        </Link>
        <div className="text-divider">
          <span>OR</span>
        </div>
        <Link to='/results'>
          <Button className='inverse'>Log in with Instagram</Button>
        </Link>
      </form>
    );
  }
}

SearchForm.displayName = 'SearchForm'

export default SearchForm
