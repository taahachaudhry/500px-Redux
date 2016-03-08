import React from 'react'
import classnames from 'classnames'
import Button from './Button'
import PhotoItem from './PhotoItem'
import BackIcon from './BackIcon';
import NextIcon from './NextIcon';

class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.searchPreviousPage = this.searchPreviousPage.bind(this)
    this.setActivePhoto = this.setActivePhoto.bind(this)
  }

  searchPreviousPage() {
    const keyword = this.props.photos.keyword;
    const tag = this.props.photos.tag;
    const page = this.props.photos.page-=1;
    this.props.actions.fetchActivePhoto(null, null);
    this.props.actions.fetchPhotos(keyword, tag, page);
  }

  searchNextPage() {
    const keyword = this.props.photos.keyword;
    const tag = this.props.photos.tag;
    const page = this.props.photos.page+=1;
    this.props.actions.fetchActivePhoto(null, null);
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
                <PhotoItem photo={photo} index={index} key={index} handleClick={this.setActivePhoto} isActive={index===this.props.photos.activePhotoId}/>
              );
            })
          }
          <li className="pagination-buttons">
            <Button
              onClick={this.searchPreviousPage}
              className={classnames({
                'hidden': this.props.photos.page === 1 || this.props.photos['photos'].length < 21
              })}>
              <BackIcon />
            </Button>
            <Button
              onClick={this.searchNextPage.bind(this)}
              className={classnames({
                  'hidden': this.props.photos['photos'].length < 21
              })}>
              <NextIcon />
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
