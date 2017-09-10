import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import GithubUserList from './GithubUserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: [],
      orgName: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event)  {
    // set it all empty when a new org is searched
    this.setState({'github': []});
    let org = event.target.value;
    let githubAPIURL = 'https://api.github.com/orgs/' + org + '/members?client_id=2ee21061ca9ec6085e38&&client_secret=f0f906d1f5f02623a010884370655da4595d301d';
    var self = this;
    fetch(githubAPIURL).then(function (response) {
      return response.json();
    }).then(function (json) {
      // make we don't both with 404 results
      if (typeof (json) === 'object' && json.message !== "Not Found") {
        self.setState({'github': json});
      }
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Welcome to Team Viewer</h4>
        </div>
        <SearchInput textChange={this.handleSearchChange.bind(this)}/>
        <GithubUserList datalist={this.state.github}/>
      </div>
    );
  }
}

export default App;
