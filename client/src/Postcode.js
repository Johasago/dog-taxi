import React from 'react'
import axios from 'axios'
import M from 'materialize-css'
import ('./form.css')

export default class Postcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                      postcode: '',
                      number: '',
                      addresses: [],
                      street: ''
                      };
    
        this.setValue = this.setValue.bind(this);
        this.handlePostcode = this.handlePostcode.bind(this);
      }
  
      componentDidMount() {
        M.AutoInit();
      }

      async handlePostcode() {
        const {postcode, number} = this.state;
        const fd = new FormData()
        fd.append("postcode", postcode)
        fd.append("number", number)

        async function lookupAddress(postcode) {
            const apiKey = '3MorZsI8vkOk-qAPhXypdg21684'
            const addresses = await axios.get('https://api.getAddress.io/find/' + postcode + '?api-key=' + apiKey)
            return addresses
          }

        lookupAddress(postcode, number).then(response => 
        this.setState({addresses: response.data.addresses}))
        

        // axios.post('/postcode', fd)
        //   .then(() => console.log('Postcode sent'))
        //   .catch(err => {
        //     console.error(err);})
        
      }

    setValue(field, event) {
        //If the input fields were directly within this
        //this component, we could use this.refs.[FIELD].value
        //Instead, we want to save the data for when the form is submitted
        let object = {};
        object[field] = event.target.value;
        this.setState(object);
        console.log(object)
      }

    render() {
      let addresses = this.state.addresses;
        let optionItems = addresses.map((value, index) =>
                <option key={index} onChange={this.setValue.bind(this, 'address')}>{value}</option>
            );
        return (<div>
        <div className="input-field col s12">
            Postcode: 
            <input type="text" value={this.state.postcode} onChange={this.setValue.bind(this, 'postcode')} required />
          </div>
          <div className="input-field col s12">  
            <button className='btn' value='Look up postcode' onClick={this.handlePostcode}>Look up address</button>    
            </div>   
            <div className="input-field col s12">
            <select className="browser-default"
              onChange={this.setValue.bind(this, 'street')} >
            {optionItems}
      </select>
      </div>
            </div>

        )
    }
}