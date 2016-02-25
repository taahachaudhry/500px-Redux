import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.displayName = 'App'
App.propTypes = {
  children: React.PropTypes.node
}

export default App
