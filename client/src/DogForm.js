import React from 'react'
import axios from 'axios'
import './form.css'

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
                    imageFile: ''
                    };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.setValue = this.setValue.bind(this);
    }

    handleChange(event) {
        console.log(event.target.files[0])
        this.setState({
            imageFile: event.target.files[0],
            image: event.target.files[0].name
        })
    }
  
    handleSubmit(event) {
      event.preventDefault();

      // get our form data out of state
      const { name, breed, dob, weight, obedience, image, imageFile } = this.state;

      axios.post('/dogs', {name, breed, dob, weight, obedience, image, imageFile})
        .then((result) => {
          //access the results here....
          console.log(result)
        });
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
        console.log(this.state)
      }
  
    render() {
      return (
          <div>
              <h2>Register your dog</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
            <input type="text" value={this.state.name} onChange={this.setValue.bind(this, 'name')} />
          </label><label>
            Breed:
            <input type="text" value={this.state.breed} onChange={this.setValue.bind(this, 'breed')} />
          </label>
          <label>
            Date of Birth:
            <input type="date" value={this.state.dob} onChange={this.setValue.bind(this, 'dob')}/>
          </label>
          <label>
            Weight:
            <input type="text" value={this.state.weight} onChange={this.setValue.bind(this, 'weight')} />
          </label>
          <label>
            Personality:
            <select value={this.state.obedience} onChange={this.setValue.bind(this, 'obedience')}>
                <option value="stubborn">Stubborn</option>
                <option value="excitable">Excitable</option>
                <option value="grumpy">Grumpy</option>
                <option value="obedient">Obedient</option>
            </select>
          </label>
          <label>
            Picture:
            <input type="file" name="imageFile" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }