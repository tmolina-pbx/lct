import React, { Component } from "react";
import "../navigation.scss";

export default class Navbar extends Component {
  burgerToggle = function() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} /> Menu
          <div className="narrowLinks">
            <a href="#" onClick={this.burgerToggle}>
              Link 1
            </a>
            <a href="#" onClick={this.burgerToggle}>
              Link 2
            </a>
            <a href="#" onClick={this.burgerToggle}>
              Link 3
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
