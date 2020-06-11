import React from 'react';
import './App.css';
import './styles/AnimatedText.css'
import './styles/Navigation.css'
import './styles/ProjectView.css'
import './styles/EducationView.css'
import './styles/ContactsView.css'
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
