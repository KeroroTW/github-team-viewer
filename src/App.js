import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
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
    console.log(event.target.value);
    let org = event.target.value;
    let githubAPIURL = 'https://api.github.com/orgs/' + org + '/members?client_id=e3930cf94c772ba10ef1&&client_secret=fb1284b1874444a9c0c55c963092f836596ecc56';
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
        <Navbar/>
        <SearchInput textChange={this.handleSearchChange.bind(this)}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <GithubUserList datalist={this.state.github}/>
      </div>
    );
  }
}

export default App;
