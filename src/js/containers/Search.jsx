import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'
import * as SearchActions from '../actions'

class Search extends React.Component {
  render() {
    const { actions } = this.props

    return (
      <div className="search-container">
        <div className="search-box">
          <SearchForm actions={actions}/>
        </div>
      </div>
    )
  }
}

Search.displayName = 'Search'
Search.propTypes = {
  actions: React.PropTypes.object
}

export default Search

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SearchActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
