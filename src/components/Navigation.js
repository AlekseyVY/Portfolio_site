import React, {useEffect, useState} from 'react'
import HomeView from "./views/HomeView";
import {  BrowserRouter as Router,
    Switch,
    Route,
    NavLink} from 'react-router-dom'
import ProjectView from "./views/ProjectsView";
import EducationView from "./views/EducationView";
import ContactsView from "./views/ContactsView";
import {CSSTransition} from "react-transition-group";
/*
Main navigation component left-side
with routing
 */


const Navigation = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        setState(true)
    },[state])

    let is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches

    if (is_mobile) {
        return (
            <div>
                <h1>
                    404 (MOBILE VIEW IS IN DEVELOPMENT)
                </h1>
            </div>
        )
    } else {
        return (
            <Router>
                <div className={'navContainer'}>
                    <div className={'navBar'}>
                        <NavLink onClick={() => setState(false)} to={'/home'} className={'navBtn'}
                                 activeClassName={'selected'}>Home</NavLink>
                        <NavLink onClick={() => setState(false)} to={'/projects'} className={'navBtn'}
                                 activeClassName={'selected'}>Projects</NavLink>
                        <NavLink onClick={() => setState(false)} to={'/education'} className={'navBtn'}
                                 activeClassName={'selected'}>Education</NavLink>
                        <NavLink onClick={() => setState(false)} to={'contacts'} className={'navBtn'}
                                 activeClassName={'selected'}>Contacts</NavLink>
                    </div>
                    <div className={'divMainContent'}>
                        <Switch>
                            <Route path={'/projects'}>
                                <CSSTransition in={state} timeout={200} classNames="switchAnimation">
                                    <ProjectView/>
                                </CSSTransition>
                            </Route>
                            <Route path={'/education'}>
                                <CSSTransition in={state} timeout={200} classNames="switchAnimation">
                                    <EducationView/>
                                </CSSTransition>
                            </Route>
                            <Route path={'/contacts'}>
                                <CSSTransition in={state} timeout={200} classNames="switchAnimation">
                                    <ContactsView/>
                                </CSSTransition>
                            </Route>
                            <Route path={'/home'}>
                                <CSSTransition in={state} timeout={200} classNames="switchAnimation">
                                    <HomeView/>
                                </CSSTransition>
                            </Route>
                            <Route path={'/'}><HomeView/></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation
