import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.displayName = 'Button'
Button.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default Button
