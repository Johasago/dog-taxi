import React, { Component } from 'react';
import Navbar from './Navbar';
import Doggie from './dogtaxi.png'

export default class Home extends Component {

    render() {
        return (
        <div>
        <Navbar/>
        <div className="container">
            <h1>Welcome to Dog Taxi</h1>
            <img src={Doggie} alt="doggies"/>
        </div>
        </div>
        )
        }
    }