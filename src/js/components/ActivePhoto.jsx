import React from 'react'

class ActivePhoto extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="active-image">
        <img src={this.props.photo.image_url} id={this.props.index}/>
      </div>
    );
  }
}

ActivePhoto.displayName = 'ActivePhoto'
ActivePhoto.propTypes = {
  actions: React.PropTypes.object,
  handleClick: React.PropTypes.func,
  index: React.PropTypes.number,
  isActive:  React.PropTypes.bool,
  photo: React.PropTypes.object
}

export default ActivePhoto
