import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
          type="text"
          className={this.props.className}
          placeholder={this.props.placeholder}
          autoFocus="true"
      />
    );
  }
}

Input.displayName = 'Input'
Input.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string
}

export default Input
