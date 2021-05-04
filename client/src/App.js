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
    likes: {},
  };

  handleLike = (entryId) => {
    const likes = this.state.likes;
    const entryLikes = likes[entryId] || 0;

    this.setState({
      likes: { ...likes, [entryId]: entryLikes + 1 },
    });
  };

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/entries">
            <Index likes={this.state.likes} onLike={this.handleLike} />
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
