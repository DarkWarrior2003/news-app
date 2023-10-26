import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News key="general" pageSize={8} country="in" category="general" />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News key="science" pageSize={8} country="in" category="science" />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News key="health" pageSize={8} country="in" category="health" />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={8}
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News key="sports" pageSize={8} country="in" category="sports" />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={8}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              key="business"
              pageSize={8}
              country="in"
              category="business"
            />
          }
        />
      </Routes>
    </div>
  );
}
