import React, {Component} from 'react';
import GithubUser from "./GithubUser";
import './GithubUserList.css';

class GithubUserList extends Component {
  render() {
    let userRows = [];
    let helpText = null;
    if (this.props.datalist.length !== 0) {
      // helpText = <h5 className="helptext">Click on picture to know more..</h5>;
      this.props.datalist.forEach(function (value, key) {
        userRows.push(<GithubUser key={key} data={value}/>);
      });
    }
    return(
      <div className="row">
        <div className="col-md-8">
          {helpText}
          {userRows}
        </div>
        <div className="col-md-4 displayCard">
          <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">User detail</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GithubUserList;