import React, {Component} from 'react';
import GithubUser from "./GithubUser";
import './GithubUserList.css';

class GithubUserList extends Component {
  render() {
    let userRows = [];
    let helpText = null;
    if (this.props.datalist.length !== 0) {
      helpText = <h5 className="helptext">Click on picture to know more..</h5>;
      this.props.datalist.forEach(function (value, key) {
        userRows.push(<GithubUser key={key} data={value}/>);
      });
    }
    return(
      <div className="container">
        {helpText}
        <div className="row">
          {userRows}
        </div>
      </div>
    )
  }
}

export default GithubUserList;