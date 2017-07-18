import React, { Component } from 'react';
import './App.css';
import { Sidebar } from './Sidebar';
import { Body } from './Body';
import { Tableview } from './Tableview';
import { Gridview } from './Gridview';

class App extends Component {

  constructor() {
    super();
    this.state = { table: true };

  }
  tableToggle(status) {

    this.setState({
      table: status
    });
  }
  Tableview() {
    return (
      <div>
        <Tableview />
      </div>
    )
  }

  Gridview() {
    return (
      <div>
        <Gridview />
      </div>
    )
  }

  render() {
    return (
      <div className="main">
        <Body />
        <Sidebar />
        <div className="card-container">
          <div className="view-changer">
            <h1>Work Orders</h1>
            <button id="list-view" type="button" onClick={() => this.tableToggle(true)} title="Click to edit name"><i className="fa fa-table"></i></button>
            <button id="grid-view" type="button" onClick={() => this.tableToggle(false)} title="Click to edit name"><i className="fa fa-th"></i></button>
          </div>
          {
            this.state.table ? this.Tableview() : this.Gridview()
          }

        </div>

      </div >
    );
  }
}

export default App;
