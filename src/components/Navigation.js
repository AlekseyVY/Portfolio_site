import React from 'react'
import HomeView from "./views/HomeView";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import ProjectView from "./views/ProjectsView";
import EducationView from "./views/EducationView";
import BlogView from "./views/BlogView";
import ContactsView from "./views/ContactsView";
/*
Main navigation component left-side
with routing
 */


const Navigation = () => {


    return (
        <Router>
            <div  className={'navContainer'}>
                <div  className={'navBar'}>
                    <NavLink to={'/home'} className={'navBtn'} activeClassName={'selected'}>Home</NavLink>
                    <NavLink to={'/projects'} className={'navBtn'} activeClassName={'selected'}>Projects</NavLink>
                    <NavLink to={'/education'} className={'navBtn'} activeClassName={'selected'}>Education</NavLink>
                    <NavLink to={'contacts'} className={'navBtn'} activeClassName={'selected'}>Contacts</NavLink>
                </div>
                <div className={'divMainContent'}>
                    <Switch>
                        <Route path={'/projects'}><ProjectView /></Route>
                        <Route path={'/education'}><EducationView /></Route>
                        <Route path={'/blog'}><BlogView /></Route>
                        <Route path={'/contacts'}><ContactsView /></Route>
                        <Route path={'/home'}><HomeView /></Route>
                        <Route path={'/'}><HomeView /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Navigation
