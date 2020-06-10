import React from 'react'
import Grid from "@material-ui/core/Grid";
import HomeView from "./views/HomeView";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
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
            <Grid container spacing={1} className={'navContainer'}>
                <Grid item xs={2} className={'navBar'}>
                    <Link  to={'/'} className={'navBtn'}>Home
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                    <Link to={'/projects'} className={'navBtn'}>Projects
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span></Link>
                    <Link to={'/education'} className={'navBtn'}>Education
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span></Link>
                    <Link to={'contacts'} className={'navBtn'}>Contacts
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span></Link>
                </Grid>
                <Grid item xs>
                    <Switch>
                        <Route path={'/projects'}><ProjectView /></Route>
                        <Route path={'/education'}><EducationView /></Route>
                        <Route path={'/blog'}><BlogView /></Route>
                        <Route path={'/contacts'}><ContactsView /></Route>
                        <Route path={'/'}><HomeView /></Route>
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}

export default Navigation
