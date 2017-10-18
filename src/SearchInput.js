import React, {Component} from 'react';
import './SearchInput.css';

class SearchInput extends Component  {
  handleChange =  (event) => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="container-fluid component-search-input">
        <input className="form-control search-input pull-left col-md-3" placeholder="eg: github" onChangeCapture={this.handleChange} />
      </div>
    )
  }
 }

export default SearchInput;