import React from 'react'
import Button from './Button'
import classnames from 'classnames'

class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context)
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

  showGeo() {
    //console.log(this.props.photos['photos'][e.target.id].latitude)
  }

  render() {
    return (
      <div>
        <ul className="photo-list">
          {
            this.props.photos['photos'].map((photo, index) => {
              return (
                <li className="photo-item" key={index} id={index}>
                  <div className="image-wrapper">
                    <img src={photo.image_url} onClick={this.showGeo.bind(this)} id={index}/>
                  </div>
                </li>
              );
            })
          }
          <li className="pagination-buttons">
            <Button
              onClick={this.searchPreviousPage.bind(this)}
              className={classnames({
                  disabled: this.props.photos.page === 1
              })}>
              &lt;
            </Button>
            <Button
              onClick={this.searchNextPage.bind(this)}
              className={classnames({
                  disabled: this.props.photos['photos'].length < 21
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
