import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import PhotoList from '../components/PhotoList'
import ActivePhoto from '../components/ActivePhoto'
import Map from '../components/Map'
import * as SearchActions from '../actions'

class Results extends React.Component {
  render() {
    const { photos, actions } = this.props

    var activePhotoElement;
    if (this.props.photos.activePhoto) {
      activePhotoElement = <ActivePhoto photo={this.props.photos.activePhoto} />
    }

    return (
      <div>
        <Header actions={actions} photos={photos} />
        <div className="search-results">
          <PhotoList actions={actions} photos={photos} />
          <Map />
          {activePhotoElement}
        </div>
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
