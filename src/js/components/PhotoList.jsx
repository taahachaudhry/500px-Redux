import React from 'react'
import Button from './Button'
import PhotoItem from './PhotoItem'
import classnames from 'classnames'

class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      activePhoto: false
    }

    this.searchPreviousPage = this.searchPreviousPage.bind(this)
    this.setActivePhoto = this.setActivePhoto.bind(this)
  }

  searchPreviousPage() {
    const keyword = this.props.photos.keyword;
    const tag = this.props.photos.tag;
    const page = this.props.photos.page-=1;
    this.props.actions.fetchPhotos(keyword, tag, page);
  }

  searchNextPage() {
    const keyword = this.props.photos.keyword;
    const tag = this.props.photos.tag;
    const page = this.props.photos.page+=1;
    this.props.actions.fetchPhotos(keyword, tag, page);
  }

  setActivePhoto(photo, id) {
    return () => {
      this.props.actions.fetchActivePhoto(photo, id)
    }
  }

  render() {
    return (
      <div>
        <ul className="photo-list">
          {
            this.props.photos['photos'].map((photo, index) => {
              return (
                <PhotoItem photo={photo} index={index} key={index} handleClick={this.setActivePhoto} isActive={index===this.props.photos.id}/>
              );
            })
          }
          <li className="pagination-buttons">
            <Button
              onClick={this.searchPreviousPage}
              className={classnames({
                'hidden': this.props.photos.page === 1 || this.props.photos['photos'].length < 21
              })}>
              &lt;
            </Button>
            <Button
              onClick={this.searchNextPage.bind(this)}
              className={classnames({
                  'hidden': this.props.photos['photos'].length < 21
              })}>
              &gt;
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

PhotoList.displayName = 'PhotoList'
PhotoList.propTypes = {
  actions: React.PropTypes.object,
  photos: React.PropTypes.object
}

export default PhotoList
