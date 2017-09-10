import React, {Component} from 'react';
import './UserDetails.css';
import Mailto from 'react-mailto';

class UserDetails extends Component {
  /**
   * "public_repos": 116,
   "public_gists": 11,
   "followers": 112,
   "following": 8,
   "created_at": "2011-07-28T15:05:30Z",
   * @returns {XML}
   */

  render() {
    let userEmail = this.props.userdata.email;
    var emailComponent = null;
    if (userEmail) {
      emailComponent =   <li className="list-group-item"><Mailto email={userEmail} obfuscate={true}>{userEmail}</Mailto></li>;
    }
    var blogComponent = null;
    if (this.props.userdata.blog) {
      blogComponent = <li className="list-group-item"><a href={this.props.userdata.blog} target="_blank" className="card-link">{this.props.userdata.blog}</a></li>;
    }
    return (
      <div className="userDetails card">
        <img className="card-img-top" alt="avatar-imge" src={this.props.userdata.avatar_url}/>
        <div className="card-block">
          <h4 className="card-title">Username: {this.props.userdata.login}</h4>
          <p className="card-text">Bio: {this.props.userdata.bio}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {this.props.userdata.id}</li>
          <li className="list-group-item">Company: {this.props.userdata.company}</li>
          <li className="list-group-item">Location: {this.props.userdata.location}</li>
          <li className="list-group-item">Followers: {this.props.userdata.followers}</li>
          <li className="list-group-item">Following: {this.props.userdata.following}</li>
          <li className="list-group-item">Joined on: {this.props.userdata.created_at}</li>
          {emailComponent}
          {blogComponent}
        </ul>
      </div>
    );
  }
}

export default UserDetails;