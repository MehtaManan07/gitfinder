import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.SearchUser(this.state.text)
    this.setState({ text: '' })
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)} className="form">
          <input
            type="text"
            onChange={(e) => this.onChange(e)}
            name="text"
            placeholder="Search users..."
          />
          <input
            type="submit"
            name="Search"
            onSubmit={(e) => this.onSubmit(e)}
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
