import React from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import M from 'materialize-css'
import ('./form.css')

export default class DogForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    name: '',
                    breed: '',
                    dob: '',
                    weight: '',
                    obedience: '',
                    image: '',
                    imageFile: '',
                    };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.setValue = this.setValue.bind(this);
    }

    componentDidMount() {
      M.FormSelect.init(this.FormSelect);
      
    }

    handleChange(event) {
        this.setState({
            imageFile: event.target.files[0],
            image: event.target.files[0].name
        })
    }
  
    handleSubmit(event) {
      event.preventDefault();

      // get our form data out of state
      const { name, breed, dob, weight, obedience, image, imageFile } = this.state;
      const fd = new FormData();
      fd.append('name', name)
      fd.append('breed', breed)
      fd.append('dob', dob);
      fd.append('weight', weight);
      fd.append('obedience', obedience);
      fd.append('imageFile', imageFile);
      fd.append('image', image);

      axios.post('/api/dogs', fd)
      .then(this.setState({
            name: "",
            breed: "",
            dob: "",
            weight: "",
            obedience: "",
            image: "",
            imageFile: "" }))
      .then(this.props.history.push('/dogs'))
      
    }

    setValue(field, event) {
        //If the input fields were directly within this
        //this component, we could use this.refs.[FIELD].value
        //Instead, we want to save the data for when the form is submitted
        let object = {};
        if (field === 'imageFile') {
            const file = event.target.files[0];
            object = {'imageFile': file}
        }
        else {
        object[field] = event.target.value;
        }
        this.setState(object);
      }
  
    render() {
      return (
        <div>
          <Navbar />
          <div className="container">
              <h2>Register your dog</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            Name: 
            <input type="text" value={this.state.name} onChange={this.setValue.bind(this, 'name')} ref={input => {this.input = input}}required />
          </div>
          <div className="input-field col s12">
            Breed:
            <input type="text" value={this.state.breed} onChange={this.setValue.bind(this, 'breed')} required/>
          </div>
          <div className="input-field col s12">
            Date of Birth:
            <input type="date" value={this.state.dob} onChange={this.setValue.bind(this, 'dob')} required/>
          </div>
          <div className="input-field col s12">
            Weight:
            <input type="text" value={this.state.weight} onChange={this.setValue.bind(this, 'weight')} required />
          </div>
          <div className="input-field col s12">
            Personality:
            <select value={this.state.obedience} onChange={this.setValue.bind(this, 'obedience')} ref={FormSelect => {this.FormSelect = FormSelect;}}required>
                <option value="">Which option best describes your dog?</option>
                <option value="stubborn">Stubborn</option>
                <option value="excitable">Excitable</option>
                <option value="grumpy">Grumpy</option>
                <option value="obedient">Obedient</option>
            </select>
          </div>
          <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input type="file" onChange={this.handleChange} />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path" type="text" value={this.state.imageFile} onChange={this.handleChange} required/>
      </div>
    </div>          <input type="submit" value="Submit" />
          
        </form>
        </div>
        </div>
      );
    }
  }