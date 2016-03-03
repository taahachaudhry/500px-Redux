import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PhotoList from '../components/PhotoList'
import * as SearchActions from '../actions'

class Results extends React.Component {
  render() {
    const { photos, actions} = this.props

    return (
      <div>
        <PhotoList actions={actions} photos={photos} />
      </div>
    )
  }
}

Results.displayName = 'Search'
Results.propTypes = {
  actions: React.PropTypes.object,
  photos: React.PropTypes.object
}

export default Results

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
)(Results)
