import React from 'react'
import {useSelector} from "react-redux";


const ProjectView = () => {
    let store = useSelector(store => store)
    console.log(store)
    return (
        <div className={'projectViewDiv'}>
            <div className="card">
                    <div className="container">
                        <h2>{store.projects.portfolio.name}</h2>
                        <h4>{store.projects.portfolio.tech.name}<span>React</span><span>Redux</span><span>Javascript</span><span>Html</span><span>Css</span></h4>
                        <p>{store.projects.portfolio.description}</p>
                        <div className={'gitAndLinkBlock'}>
                        <a className={'projectGitLink'} href={'https://github.com/AlekseyVY/Portfolio_site'} target={'_blank'} rel="noopener noreferrer">
                        <img className={'imgProject'} src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR' +
                        '3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb' +
                        '3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkve' +
                        'GxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5Ni4xMzMsMzU0LjE3NGM0OS44ODUtNS44OTEsMTAyLjk0Mi0yNC4wMjksMTAyLjk0Mi0xMTAuMTkyICAgYzAtMjQuNDktOC42MjQtNDQuNDQ4LT' +
                        'IyLjY3LTU5Ljg2OWMyLjI2Ni01Ljg5LDkuNTE1LTI4LjExNC0yLjczNC01OC45NDdjMCwwLTE4LjEzOS01Ljg5OC02MC43NTksMjIuNjY5ICAgYy0xOC4xMzktNC45ODMtMzguMDktOC4xNjMtNTYuNjgyLTguMTYzYy0xOS' +
                        '4wNTMsMC0zOS4wMTEsMy4xOC01Ni42OTcsOC4xNjNjLTQzLjA4Mi0yOC41NjctNjEuMjItMjIuNjY5LTYxLjIyLTIyLjY2OSAgIGMtMTIuMjQxLDMwLjgzMy00Ljk4Myw1My4wNTctMi43MTgsNTguOTQ3Yy0xNC4wNjEsMTUu' +
                        'NDItMjIuNjc3LDM1LjM3OS0yMi42NzcsNTkuODY5YzAsODYuMTYzLDUzLjA1NywxMDQuMzAxLDEwMi45NDIsMTEwLjE5MiAgIGMtNi4zNDQsNS40NTItMTIuMjQxLDE1Ljg3My0xNC41MDcsMzAuMzg3Yy0xMi43MDIsNS40M' +
                        'zgtNDUuODA4LDE1Ljg3My02NS43NTgtMTguNTkyYzAsMC0xMS43OTUtMjEuMzEtMzQuMDEyLTIyLjY2OSAgIGMwLDAtMjIuMjI0LTAuNDUzLTEuODEzLDEzLjU5MmMwLDAsMTQuOTYsNi44MTIsMjQuOTQzLDMyLjY1M2MwLDA' +
                        'sMTMuNiw0My4wODksNzYuMTc5LDI5LjQ4djM4LjU0MyAgIGMwLDUuOTA2LTQuNTMsMTIuNzAyLTE1Ljg2NSwxMC44OUM5Ni4xMzksNDM4Ljk3NywzMi4yLDM1NC42MjYsMzIuMiwyNTUuNzdjMC0xMjMuODA3LDEwMC4yMTYtM' +
                        'jI0LjAyMiwyMjQuMDMtMjI0LjAyMiAgIGMxMjMuMzQ3LDAsMjI0LjAyMywxMDAuMjE2LDIyMy41NywyMjQuMDIyYzAsOTguODU2LTYzLjk0NiwxODIuNzU0LTE1Mi44MjgsMjEyLjY4OGMtMTEuMzQyLDIuMjY2LTE1Ljg3My00' +
                        'LjUzLTE1Ljg3My0xMC44OSAgIFYzOTUuNDVDMzExLjEsMzc0LjU3NywzMDQuMjg4LDM2MC45ODUsMjk2LjEzMywzNTQuMTc0TDI5Ni4xMzMsMzU0LjE3NHogTTUxMiwyNTYuMjNDNTEyLDExNC43MywzOTcuMjYzLDAsMjU2L' +
                        'jIzLDAgICBDMTE0LjczLDAsMCwxMTQuNzMsMCwyNTYuMjNDMCwzOTcuMjYzLDExNC43Myw1MTIsMjU2LjIzLDUxMkMzOTcuMjYzLDUxMiw1MTIsMzk3LjI2Myw1MTIsMjU2LjIzTDUxMiwyNTYuMjN6IiBmaWxsPSIjMEQyN' +
                        'jM2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+'} alt={'github link'}/>
                        </a>
                        <a className={'livePreviewLinkProgect'} href={'http://www.google.com'} target={'_blank'} rel="noopener noreferrer">{store.projects.portfolio.link}</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProjectView
