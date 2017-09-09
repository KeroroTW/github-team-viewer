import React, {Component} from 'react';


class SearchInput extends Component  {
  handleChange =  (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChangeCapture={this.handleChange} />
        </div>
      </div>
    )
  }
 }

export default SearchInput;