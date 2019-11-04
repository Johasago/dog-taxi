import React, { Component } from 'react';
import Img from './Image'
import Navbar from './Navbar';

const images = require.context('../public/images', false);
//const defaultImage = "https://dogsnet.com/wp-content/uploads/2018/05/chusky-header.jpg"

export default class Dogs extends Component {

state = {dogs: []}
  
    componentDidMount() {
      fetch('/api/dogs/all')
        .then(res => res.json())
        .then(dogs => this.setState({ dogs }));

    }

    calculateAge = function (dob) {
        const today = new Date();
        const time = new Date(dob).getTime();
        const age = new Date(today - time);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    render() {
    return (
        <div>
        <Navbar/>
    <div className="container col s12">
        <h1 className="flow-text">The dogs that have registered are</h1>
        {this.state.dogs.map((dog, i) =>
        <div key={i}>
            <ul className="collection">
                <li className="collection-item avatar">
                    <Img src={images(`./${dog.image}`)} className='circle responsive-img' style={{ objectFit: "cover"}} id='img' alt={dog.name} />
                    <span className="title" > <strong>{dog.name}</strong></span>
                    <p> a {dog.breed}</p>
                    <p> who weighs {dog.weight} </p>
                    <p> is {this.calculateAge(dog.dob)} years old</p>
                    <p> and is {dog.obedience}  </p>
                    <a href={"http://localhost:3001/dogs/name/" + dog.name} className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>
        </div>)}
        </div>
        </div>
    );
}
}

