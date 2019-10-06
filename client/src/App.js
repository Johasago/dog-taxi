import React, { Component } from 'react';
import DogForm from './DogForm';

const images = require.context('./images', false);

class App extends Component {
    state = {dogs: []}
  
    componentDidMount() {
      fetch('/dogs/all')
        .then(res => res.json())
        .then(dogs => this.setState({ dogs }));
    }
  
    render() {
      return (
        <div className="App">
          <h1>The dogs that have registered are</h1>
          {this.state.dogs.map((dog, i) =>
            <div key={i}><ul><li><strong>{dog.name}</strong> is a {dog.breed} and is {dog.obedience}</li>
            <img src={dog.image ? images('./' + dog.image ) : ''} alt={dog.name} style={{height:'200px', width:'200px', objectFit: 'cover'}}></img>
            </ul></div>
          )}
          <DogForm />
        </div>
      );
    }
  }
  
  export default App;