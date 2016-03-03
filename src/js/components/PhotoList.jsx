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

  showGeo() {
    //console.log(this.props.photos['photos'][e.target.id].latitude)
  }

  render() {
    return (
      <div>
        {
          this.props.photos['photos'].map((photo, index) => {
            return (
              <div key={index}>
                <img src={photo.image_url} onClick={this.showGeo.bind(this)} id={index}/>
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
