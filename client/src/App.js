import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DogForm from './DogForm';
import Login from './Login';
import Home from './Home';
import Dogs from './Dogs';
import OwnerForm from './OwnerForm';

class App extends Component {

    render() {
      const App = () => (
        <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route path='/doggos' component={Dogs}/>
          <Route path='/register' component={DogForm}/>
          <Route path='/ownerregister' component={OwnerForm}/>


        </Switch>
      </div>
      )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}
  
  export default App;