import React from 'react'
import Grid from "@material-ui/core/Grid";
import HomeView from "./views/HomeView";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import ProjectView from "./views/ProjectsView";
import EducationView from "./views/EducationView";
import BlogView from "./views/BlogView";
import ContactsView from "./views/ContactsView";


const Navigation = () => {

    return (
        <Router>
            <Grid container spacing={1}>
                <Grid item xs={2} className={'navBar'}>
                    <ButtonGroup orientation={'vertical'} className={'navButtonGroup'}>
                        <Button component={Link} to={'/'} className={'navButton'}>Home</Button>
                        <Button component={Link} to={'/projects'}>Projects</Button>
                        <Button component={Link} to={'/education'}>Education</Button>
                        <Button component={Link} to={'/blog'}>Blog</Button>
                        <Button component={Link} to={'contacts'}>Contacts</Button>
                    </ButtonGroup>
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
