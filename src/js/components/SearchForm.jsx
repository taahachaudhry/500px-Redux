import React           from 'react'
import { Link }        from 'react-router'
import Input           from './Input'
import Button          from './Button'

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  searchPhotos(e) {
    const keyword = e.target.value.trim();
    if (e.which === 13) {
      this.props.actions.fetchPhotos(keyword);
    }
  }

  render() {
    return (
      <form>
        <Input
          placeholder="Enter a keyword to search:"
          className="search"
          onKeyDown={this.searchPhotos.bind(this)}
        />
        <Link to='/results'>
          <Button>
            Search
          </Button>
        </Link>
      </form>
    );
  }
}

SearchForm.displayName = 'SearchForm'
SearchForm.propTypes = {
  actions: React.PropTypes.object
}

export default SearchForm
