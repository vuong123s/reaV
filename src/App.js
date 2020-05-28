import React from "react";
import "./styles.css";
import Header from "../element/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header light="true" />
    </Router>
  );
}
