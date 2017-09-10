import React, {Component} from 'react';
import GithubUser from "./GithubUser";
import './GithubUserList.css';

class GithubUserList extends Component {

  closeCards(event) {
    var allOpenCards = document.querySelectorAll('.userDetails')
    allOpenCards.forEach(function(card){
      card.parentNode.removeChild(card);
    });
  }



  render() {
    var userRows = [];
    var closeCard = null;
    var helpText = null;
    if (this.props.datalist.length !== 0) {
      closeCard = <a className="btn btn-danger closeCards" onClick={this.closeCards.bind(this)}>Close all cards</a>;
      helpText = <h5 className="helptext">Click on the profile image to get more  details</h5>
      this.props.datalist.forEach(function (value, key) {
        userRows.push(<GithubUser key={key} data={value}/>);
      });
    }
    return(
      <div className="container">
        {helpText}
        {closeCard}
        <div className="row">
          {userRows}
        </div>
      </div>
    )
  }
}

export default GithubUserList;