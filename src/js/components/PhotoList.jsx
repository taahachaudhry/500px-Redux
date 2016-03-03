import React from 'react'
import Button from './Button'

class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  searchNextPage(e) {
    const keyword = this.props.photos.keyword;
    const tag = this.props.photos.tag;
    const page = this.props.photos.page+=1;
    if (e.type === 'click') {
      this.props.actions.fetchPhotos(keyword, tag, page);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.photos['photos'].map((photo) => {
            return (
              <div>
                <img src={photo.image_url} />
              </div>
            );
          })
          }
          <Button
            onClick={this.searchNextPage.bind(this)}>
            Next
          </Button>
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
