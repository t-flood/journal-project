import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Index from "./components/Index";
import NewEntry from "./components/NewEntry";
import EditEntry from "./components/EditEntry";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/entries">
            <Index />
          </Route>
          <Route exact path="/entries/new" component={NewEntry} />
          <Route exact path="/entries/:id/edit" component={EditEntry} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
