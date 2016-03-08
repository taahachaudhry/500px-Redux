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
    const keyword = ReactDom.findDOMNode(this.refs.keyword).value.trim();
    const tag = ReactDom.findDOMNode(this.refs.tag).value.trim();
    const page = 1;
    if (e.which === 13 || e.type === 'click') {
      this.props.actions.fetchPhotos(keyword, tag, page);
    }
  }

  render() {
    return (
      <form onSubmit={this.searchPhotos.bind(this)}>
        <Input
          placeholder="Enter a keyword to search:"
          className="search"
          ref="keyword"
        />
        <Input
          placeholder="Enter a tag to search:"
          className="search"
          ref="tag"
        />
        <Link to='/results'>
          <Button
            onClick={this.searchPhotos.bind(this)}
            className="search-button"
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
