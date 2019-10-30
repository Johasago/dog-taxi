import React, { Component } from 'react';
import axios from 'axios'
import M from 'materialize-css'
import Navbar from './Navbar';
import './form.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  email: '',
                  password: '',
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    M.FormSelect.init(this.FormSelect);
}

  handleSubmit(event) {
    event.preventDefault();
    // get our form data out of state
    const { email, password } = this.state;
    const fd = new FormData();
    fd.append('email', email);
    fd.append('password', password);
    axios.post('/login', fd)
      .then(response => {
        if(response.status === 200) {
          this.props.history.push('/dogs')
        }
      })
      .catch(err => {
        M.toast({html: err.response.data.message})
    })
  }

  setValue(field, event) {
    //If the input fields were directly within this
    //this component, we could use this.refs.[FIELD].value
    //Instead, we want to save the data for when the form is submitted
    let object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

    render() {
        return (
            <div>
        <Navbar/>
        <div className="container">
        <h2>Sign in</h2>
        <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input type="email" id="email" onChange={this.setValue.bind(this, 'email')} required></input>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="password" id="password" onChange={this.setValue.bind(this, 'password')} required></input>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <input type="submit" value="Submit" className="btn" />
    </form>
  </div>
  </div>
  </div>
        )
        }
    }