import React           from 'react'

class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context)
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
      </div>
    );
  }
}

PhotoList.displayName = 'PhotoList'
PhotoList.propTypes = {
  photos: React.PropTypes.object
}

export default PhotoList
