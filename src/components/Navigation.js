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
import {useDispatch, useSelector} from "react-redux";
import {eng, rus} from "../reducers/langSelectReducer";
/*
Main navigation component left-side
with routing
 */


const Navigation = () => {
    const [state, setState] = useState(false)
    const [lang, setLang] = useState(true)
    let store = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {
        setState(true)
    },[state])

    useEffect(() => {
        if (lang === true) {
            dispatch(eng())
        } else {
            dispatch(rus())
        }
    },[lang])

        return (
            <Router>
                <div className={'navContainer'}>
                    <div className={'navBar'}>
                        <label className="switch"><input onClick={() => setLang(!lang)} type="checkbox" id="togBtn"/>
                            <div className="slider round"></div></label>
                        <NavLink onClick={() => setState(false)} to={'/home'} className={'navBtn'}
                                 activeClassName={'selected'}>{store.navButtons.home}</NavLink>
                        <NavLink onClick={() => setState(false)} to={'/projects'} className={'navBtn'}
                                 activeClassName={'selected'}>{store.navButtons.projects}</NavLink>
                        <NavLink onClick={() => setState(false)} to={'/education'} className={'navBtn'}
                                 activeClassName={'selected'}>{store.navButtons.skills}</NavLink>
                        <NavLink onClick={() => setState(false)} to={'contacts'} className={'navBtn'}
                                 activeClassName={'selected'}>{store.navButtons.contacts}</NavLink>
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

export default Navigation
