import React           from 'react'
import ReactDom from 'react-dom';
import { Link }        from 'react-router'
import Input           from './Input'
import Button          from './Button'

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  searchPhotos(e) {
    const keyword = ReactDom.findDOMNode(this.refs.searchInput).value.trim();
    const page = 1;
    if (e.which === 13 || e.type === 'click') {
      this.props.actions.fetchPhotos(keyword, page);
    }
  }

  render() {
    return (
      <form onSubmit={this.searchPhotos.bind(this)}>
        <Input
          placeholder="Enter a keyword to search:"
          className="search"
          ref='searchInput'
        />
        <Link to='/results'>
          <Button
            onClick={this.searchPhotos.bind(this)}
          >
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
