import React from 'react'
import classnames from 'classnames'

class PhotoItem extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <li
        className={classnames({
          'active': this.props.isActive,
          'photo-item': true
        })}
        id={this.props.index}
        onClick={this.props.handleClick(this.props.photo, this.props.index)} >
        <div className="image-wrapper">
          <img src={this.props.photo.image_url} id={this.props.index}/>
        </div>
      </li>
    );
  }
}

PhotoItem.displayName = 'PhotoItem'
PhotoItem.propTypes = {
  actions: React.PropTypes.object,
  handleClick: React.PropTypes.func,
  index: React.PropTypes.number,
  isActive:  React.PropTypes.bool,
  photo: React.PropTypes.object
}

export default PhotoItem
