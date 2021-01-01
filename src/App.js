import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import Service from "./Pages/Services";
import Reports from "./Pages/Reports";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Layout />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/services" component={Service} />
        <Route path="/reports" component={Reports} />
      </Router>
    </div>
  );
};

export default App;
