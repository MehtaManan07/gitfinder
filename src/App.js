import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, loading: false })
    console.log(res.data)
  }
  render() {
    const { loading, users } = this.state
    return (
      <div>
        <Navbar />
        {/* <UserItem /> */}
        <Users loading={loading} users={users} />
      </div>
    );
  }
}
export default App;
