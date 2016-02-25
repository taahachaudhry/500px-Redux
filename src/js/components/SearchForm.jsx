import React from 'react'
import Input from './Input'
import Button from './Button'

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Tags"
        />
        <Input
          placeholder="Locations"
        />
       <Button>Search</Button>
      </div>
    );
  }
}

SearchForm.displayName = 'SearchForm'

export default SearchForm
