import React from 'react';
import axios from 'axios';
import ToggleDark from './components/ToggleDark';
import './App.css';

class App extends React.Component {
constructor(){
  super();
  this.state={
    data: []
  };
}

componentDidMount(){
  axios.get(`http://localhost:5000/api/players`)
  .then(res => {
    this.setState(res.data);
    this.setState = this.setState({data: res.data})
  })
  .catch(err => {
    alert("There was a problem getting requested data.", err)
  });
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Women's World Cup Players</h1>
      </header>
      <ToggleDark data={this.state.data}/>
    </div>
  );
}
}
export default App;
