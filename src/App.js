import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  
  SearchUser = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
        <Search SearchUser={this.SearchUser} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
