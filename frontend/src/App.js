import React from 'react';
import './App.css';
import './components/navigation.css'
import Container from "@material-ui/core/Container";
import Navigation from "./components/Navigation";

export default function App() {

    return (
        <Container>
            <Navigation />
        </Container>
    );
}
