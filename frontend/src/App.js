import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/eng/home_eng';

class App extends Component  {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <HomePage />
            </div>
        )
    }

}

export default App;
