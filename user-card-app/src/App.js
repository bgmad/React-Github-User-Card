import React from 'react';
import { getData } from './components/data';
import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: []
    }
  }

  componentDidMount() {
  }

  addUser = username => {
    getData(`https://api.github.com/users/${username}`)
    .then(res => this.setState({userList: [...this.state.userList, res]}))
    .catch(err => console.error(`Error: ${err}`))
  }

  render() {
    console.log(this.state.userList[0])
      return (
      <div>
        <SearchForm userList={this.state.userList} addUser={this.addUser}/>
        <CardList userList={this.state.userList}/>
      </div>
    )
  }
}

export default App;
