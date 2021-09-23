import './App.css';
import React, { Component } from 'react';
import Spinner from './Spinner';
import DataHandler from './DataHandler';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './media/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading: true,
      url: 'https://reqres.in/api/users?page=1',
      userData: null,
     
    }
  }

  async fetchFunction() {
    this.setState({ clicked: true });
    let response = await fetch(this.state.url);
    let data = await response.json();
    setTimeout(() => {
      this.setState({ userData: data.data, loading: false });
      console.log('data fetched')
    }, 2000);
  }

  show() {
    if (this.state.clicked) {
      if (this.state.loading === true) {
        return (
          <Spinner />
        );
      }
      else {
        if (this.state.userData === null) {
          alert('data not received yet')
        } else {
          return (
            <DataHandler usrData={this.state.userData} />);
        }
      }
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" width="auto" height="40em" className="d-inline-block align-middle" id="logo" />
              Task 2
            </a>
            <button className="btn btn-primary btn-lg" onClick={() => this.fetchFunction()} >Get Users</button>
          </div>
        </nav>
        {this.show()}
      </>
    );
  }
}

export default App;
