import React, {Component} from 'react';
import GithubUser from "./GithubUser";

class GithubUserList extends Component {

  render() {
    var rows = [];
    if (this.props.datalist.length !== 0) {
      this.props.datalist.forEach(function (data) {
        rows.push(<GithubUser data={data}/>);
      });
    }

    return(
      <div>
        {rows}
      </div>
    )
  }
}

export default GithubUserList;