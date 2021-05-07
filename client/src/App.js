import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Index from "./components/Index";
import Form from "./components/Form";

class App extends Component {
  state = {
    // likes: {},
    incrementBy: 1,
  };

  handleChangeIncrementBy = (incrementBy) => {
    this.setState({ incrementBy });
  };

  // handleLike = (entryId) => {
  //   const likes = this.state.likes;
  //   const entryLikes = likes[entryId] || 0;

  //   this.setState({
  //     likes: { ...likes, [entryId]: entryLikes + this.state.incrementBy },
  //   });
  // };

  render() {
    return (
      <Router>
        <Nav onChangeIncrementBy={this.handleChangeIncrementBy} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/entries">
            <Index incrementBy={this.state.incrementBy} />
          </Route>
          <Route exact path="/entries/new" component={Form} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
