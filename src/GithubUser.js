import React, {Component} from 'react';
import './GithubUser.css';
import UserDetails from "./UserDetails";

class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      showCard: false,
    }
  }

  getUserData(event) {
    if (this.state.showCard === false) {
      this.setState({showCard: true});
      let apiUrl = this.props.data.url + '?client_id=2ee21061ca9ec6085e38&&client_secret=f0f906d1f5f02623a010884370655da4595d301d';
      const self = this;
      fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (typeof (json) === 'object' && json.message !== "Not Found") {
          self.setState({'userData': json});
        }
      })
    } else {
      this.setState({showCard: false});
    }
  }

  render() {
    let userDetails = null;
    if (this.state.userData) {
      userDetails = <UserDetails userdata={this.state.userData}/>;
    }
    let avatar_url =  this.props.data.avatar_url + '&s=150';
    return (
      <div className="col userContainer">
        <img src={avatar_url} onClick={this.getUserData.bind(this)} className="profile-picture" alt=""/>
        <p>github: <a href={this.props.data.html_url} target='_blank'>@{this.props.data.login}</a> </p>
        {this.state.showCard && userDetails}
      </div>
    );
  }
}


export default GithubUser;