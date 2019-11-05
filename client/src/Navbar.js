import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css'
import "materialize-css/dist/css/materialize.min.css";

export default class Navbar extends Component {

componentDidMount() {
      M.Sidenav.init(this.Sidenav);
  
      let instance = M.Sidenav.getInstance(this.Sidenav);
      instance.open();
      instance.close();
}


render() {
    return (
    <div>
    <nav>
        <div className="nav-wrapper purple darken-2">
            <Link to={'./'} className="brand-logo">  <i className="material-icons">directions_car</i>Dog Taxi</Link>
            <Link to={'./'} data-target="mobile" className="sidenav-trigger" onMouseOver={this.handleHover}><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down" >
                <li><Link to={'./ownerregister'}>Register</Link></li>
                <li><Link to={'./register'}>Register Your Dog</Link></li>
                <li><Link to={'./login'}>Sign In</Link></li>
                <li><Link to={'./Doggos'}>Dogs</Link></li>
            </ul>
        </div>
    </nav>

    <ul className="sidenav" id="mobile" ref={Sidenav => {this.Sidenav = Sidenav;}}>
        <li><Link to={'./ownerregister'}>Register</Link></li>
        <li><Link to={'./register'}>Register Your Dog</Link></li>
        <li><Link to="./login">Sign In</Link></li>
        <li><Link to={'./Doggos'}>Dogs</Link></li>
    </ul>
    </div>
)
}
}