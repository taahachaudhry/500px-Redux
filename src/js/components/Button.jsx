import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}

Button.displayName = 'Button'
Button.propTypes = {
  children: React.PropTypes.node
}

export default Button
