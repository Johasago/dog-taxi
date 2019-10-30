import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import M from 'materialize-css'
import ('./form.css')

export default class OwnerForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    firstName: '',
                    postcode: '',
                    lastName: '',
                    address: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    addresses:[]
                    };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setValue = this.setValue.bind(this);
      this.handlePostcode = this.handlePostcode.bind(this);
    }

    componentDidMount() {
      M.FormSelect.init(this.FormSelect);
  }

  async handlePostcode() {
    async function lookupAddress(postcode) {
        const apiKey = '3MorZsI8vkOk-qAPhXypdg21684'
        const addresses = await axios.get('https://api.getAddress.io/find/' + postcode + '?api-key=' + apiKey)
        return addresses
      }
    lookupAddress(this.state.postcode).then(response => 
    this.setState({addresses: response.data.addresses}))
  }    

    handleSubmit(event) {
      event.preventDefault();
      // get our form data out of state
      const { firstName, lastName, address, postcode, email, password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
        M.toast({html: "Passwords don't match"});}
      else{
        console.log(this)

      const fd = new FormData();
      fd.append('firstName', firstName)
      fd.append('lastName', lastName)
      fd.append('address', address)
      fd.append('postcode', postcode)
      fd.append('email', email);
      fd.append('password', password);

      axios.post('/owners', fd).catch(err => {
        M.toast({html:"Email is not unique. Have you registered before? Please try again"});
      })
      .then(this.setState({
            firstName: "",
            lastName: "",
            address: "",
            postcode:"",
            email: "",
            password: "", 
            confirmPassword: null
          })
      )}}

    setValue(field, event) {
        //If the input fields were directly within this
        //this component, we could use this.refs.[FIELD].value
        //Instead, we want to save the data for when the form is submitted
        let object = {};
        object[field] = event.target.value;
        if(Object.keys(object)[0] === "address") {
          object[field]=object[field].split(",")
          let cleanArray = object[field].filter(function(e){return e}); ;
          console.log(cleanArray)
          this.setState(object)
        }
        else{
          this.setState(object);
      }
    }
  
    render() {
      let addresses = this.state.addresses;
        let optionItems = addresses.map((value, index) =>
                <option key={index} onChange={this.setValue.bind(this, 'address')}>{value}</option>
            );
        return (
        <div>
          <Navbar />
          <div className="container">
              <h2>Register here to use our site</h2>
    <div>
        <div className="input-field col s12">
            Postcode: 
            <input type="text" value={this.state.postcode} onChange={this.setValue.bind(this, 'postcode')} required />
          </div>
          <div className="input-field col s12">  
            <button className='btn' value='Look up postcode' onClick={this.handlePostcode}>Look up address</button>    
            </div>   
            <div className="input-field col s12">
            <select className="browser-default"
              onChange={this.setValue.bind(this, 'address')} >
            {optionItems}
      </select>
      </div>
            </div>

          <form name="form" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            First Name: 
            <input type="text" value={this.state.firstName} onChange={this.setValue.bind(this, 'firstName')} required />
          </div>
          <div className="input-field col s12">
            Last Name:
            <input type="text" value={this.state.lastName} onChange={this.setValue.bind(this, 'lastName')} required/>
            </div>
          <div className="input-field col s12">
            Address:
            <input type="text" value={this.state.address} onChange={this.setValue.bind(this, 'address')} required/>
          </div>
          <div className="input-field col s12">
            Postcode:
            <input type="text" value={this.state.postcode} onChange={this.setValue.bind(this, 'postcode')} required/>
          </div>
          <div className="input-field col s12">
            Email address:
            <input type="email" value={this.state.email} onChange={this.setValue.bind(this, 'email')} required/>
          </div>
          <div className="input-field col s12">
            Password:
            <input type="password" value={this.state.password} onChange={this.setValue.bind(this, 'password')} required />
          </div>
          <div className="input-field col s12">
            Confirm Password:
            <input type="password" value={this.state.cpassword} onChange={this.setValue.bind(this, 'confirmPassword')} required />
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
        </div>
        </div>
      );
    }
  }