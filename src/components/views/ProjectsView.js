import React from 'react'
import {useSelector} from "react-redux";


const ProjectView = () => {
    let store = useSelector(store => store)

    return (
        <div className={'projectViewDiv'}>
            <div className="card">
                        <div className={'projectHead'}>
                            <h2>{store.projects.portfolio.name}</h2>
                            <h4>{store.projects.portfolio.tech.name}</h4>
                        </div>
                        <div className={'divTechUsed'}>
                            <ul className={'ulTechUsed'}>
                                <li>React</li>
                                <li>Redux</li>
                                <li>JavaScript</li>
                                <li>Html</li>
                                <li>Css</li>
                            </ul>
                        </div>
                        <div className={'projectDescription'}>
                            <p>{store.projects.portfolio.description}</p>
                        </div>
                            <div className={'linkBlock'}>
                        <a className={'livePreviewLinkProgect'} href={'https://github.com/AlekseyVY/Portfolio_site'} target={'_blank'} rel="noopener noreferrer">{store.projects.portfolio.link}</a>
                            </div>
            </div>
        </div>
    )
}

export default ProjectView
