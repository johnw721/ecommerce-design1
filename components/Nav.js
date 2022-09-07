import { React, Component } from "react";
import SearchBar from "./SearchBar";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <a href="./">Home</a>
          <a href="./">Products</a>
          <SearchBar />
          <a href="./">Favorites</a>
        </div>
      </nav>
    );
  }
}

export default Nav;
