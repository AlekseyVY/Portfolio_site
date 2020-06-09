import React from 'react';
import './App.css';
import './styles/AnimatedText.css'
import './styles/Navigation.css'
import Container from "@material-ui/core/Container";
import Navigation from "./components/Navigation";

export default function App() {

    return (
        <div className={'container'}>
        <Container>
            <Navigation />
        </Container>
        </div>
    );
}
