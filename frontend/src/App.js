import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './containers/pages/home';
import Education from './containers/pages/Education';
import Contacts from './containers/pages/contacts';
import Projects from './containers/pages/projects';

export default function App() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/education">education</Link>
                        </li>
                        <li>
                            <Link to="/contacts">contacts</Link>
                        </li>
                        <li>
                            <Link to="/projects">projects</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="/education">
                        <Education />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
