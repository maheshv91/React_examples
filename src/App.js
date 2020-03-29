import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import axios from 'axios'

import './App.css';


class App extends Component {


  state = {
    users: [],
    loading: false,
    alert: null
  }
  // Search Github 
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res.data);
    this.setState({ users: res.data.items, loading: false })
  }

  //Clear Github users
  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  // async componentDidMount() {
  //   console.log(process.env)

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   //console.log(res.data);
  //   this.setState({ users: res.data, loading: false })
  // }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert} />
          <Users loading={loading} users={users} />
        </div>

      </div>
    );

  }

}

export default App;
