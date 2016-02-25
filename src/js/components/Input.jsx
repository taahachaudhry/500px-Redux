import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
      />
    );
  }
}

Input.displayName = 'Input'
Input.propTypes = {
  placeholder: React.PropTypes.string
}

export default Input
