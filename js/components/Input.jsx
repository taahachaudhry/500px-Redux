import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
          type="text"
          className={this.props.className}
          placeholder={this.props.placeholder}
          autoFocus="true"
          onKeyDown={this.props.onKeyDown}
      />
    );
  }
}

Input.displayName = 'Input'
Input.propTypes = {
  className: React.PropTypes.string,
  onKeyDown: React.PropTypes.func,
  placeholder: React.PropTypes.string
}

export default Input
