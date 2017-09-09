import React, {Component} from 'react';


class GithubUser extends Component {

  render() {
    return (
      <div>
        {this.props.data.login}
      </div>
    );
  }
}

export default GithubUser;