import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <a href="/user"> User</a>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/user" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/course/:id" exact component={Course} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1 style={{textAlign: 'center'}}>Not Found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
