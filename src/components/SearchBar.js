import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
  };

  handleText = (e) => {
    if (e.key === "Enter") this.props.searchMovies(this.state.search)
  }

  render() {
    const { search } = this.state;
    return (
      <div className="search-bar">
        <input
          type="search"
          name="search"
          required
          value={search}
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
          onKeyUp={this.handleText}
          autoComplete="off"
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </div>
    );
  }
}

export default SearchBar;
