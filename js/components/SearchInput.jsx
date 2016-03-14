import React from 'react'

class SearchInput extends React.Component {
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

SearchInput.displayName = 'SearchInput'
SearchInput.propTypes = {
  placeholder: React.PropTypes.string
}

export default SearchInput
