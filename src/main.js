import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import Home from "./containers/home";
import "./assets/styles/main.scss";

const store = configureStore();

class Main extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Main;
