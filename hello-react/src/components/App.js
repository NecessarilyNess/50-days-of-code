import React, {Component} from 'react';
import '../css/App.css';

import AddAppointments from './addAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './listAppointments';

class App extends Component {

  constructor() {
    super(); //allows you to get information from the parent component.
    this.state = {
      myName: 'Vanessa'
    }
  }
  render() {
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {this.state.myName}
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}
export default App;
