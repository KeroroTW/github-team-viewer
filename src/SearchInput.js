import React, {Component} from 'react';
import './SearchInput.css';

class SearchInput extends Component  {
  handleChange =  (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input className="form-control" placeholder="Enter the org name such as: github" onChangeCapture={this.handleChange} />
        </div>
      </div>
    )
  }
 }

export default SearchInput;