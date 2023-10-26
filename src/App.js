import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  api = "fc8b498b1c224e218245a717f9f59d2d"
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            
            element={<News api = {this.api} key="general" pageSize={8} country="in" category="general" />}
          />
          <Route
            exact
            path="/science"
            element={<News api = {this.api} key="science" pageSize={8} country="in" category="science" />}
          />
          <Route
            exact
            path="/health"
            element={<News api = {this.api} key="health" pageSize={8} country="in" category="health" />}
          />
          <Route
            exact
            path="/technology"
            element={<News api = {this.api} key="technology" pageSize={8} country="in" category="technology" />}
          />
          <Route
            exact
            path="/sports"
            element={<News api = {this.api} key="sports" pageSize={8} country="in" category="sports" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News api = {this.api} key="entertainment" pageSize={8} country="in" category="entertainment" />}
          />
          <Route
            exact
            path="/business"
            element={<News api = {this.api} key="business" pageSize={8} country="in" category="business" />}
          />
        </Routes>
        
      </div>
    );
  }
}

export default App;
