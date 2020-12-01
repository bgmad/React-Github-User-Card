import React from 'react';
import { getData } from './components/data'
import CardList from './components/CardList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getData('https://api.github.com/users/bgmad')
    .then(res => this.setState({data: [...this.state.data, res]}))
    .catch(err => console.error(`Error: ${err}`))
  }

  render() {
    console.log(this.state.data[0])
      return (
      <div>
        <CardList data={this.state.data}/>
      </div>
    )
  }
}

export default App;
