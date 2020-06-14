import React from 'react';
import './App.css';
import './styles/AnimatedText.css'
import './styles/Navigation.css'
import './styles/ProjectView.css'
import './styles/EducationView.css'
import './styles/ContactsView.css'
import './styles/HomeView.css'
import Navigation from "./components/Navigation";

export default function App() {


    if (/Mobi/.test(navigator.userAgent)) {
        return (
            <div>
                <h1>
                    404 (MOBILE VIEW IS IN DEVELOPMENT)
                </h1>
            </div>
        )
    } else {
    return (
        <div className={'container'}>
            <Navigation />
        </div>
    );
    }
}
