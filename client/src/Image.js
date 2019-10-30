import React from 'react';

export default class Image extends React.Component {
    render() {
        return (
        <img src={this.props.src} className={this.props.className} alt={this.props.alt} style={this.props.style} id="img" onError={this.props.onError} />
        )}
}
