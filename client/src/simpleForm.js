import React from 'react'

export default class DogForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    imageFile: null,
                    image: ''
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            imageFile: event.target.files[0],
            image: event.target.files[0].name
        })
    }

    handleSubmit() {
        let fd = new FormData();
        fd.append('imageFile', this.state.imageFile)
        console.log(this.state)
    }

    render() {
        return (
        <div>
            <input type="file" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Upload</button>
        </div>
        )
    }
}