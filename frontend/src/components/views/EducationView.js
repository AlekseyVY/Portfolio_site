import React from 'react'
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const EducationView = () => {

    return (
        <div className={'educationViewDiv'}>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow hover={true}>
                            <TableCell>
            <p>Volgograd Politechnik University: 2000 - 2002</p>
                            </TableCell>
                    </TableRow>
                        <TableRow hover={true}>
                            <TableCell>
            <p>University of People: 2019 - learning (Bachelor of Computer Science)</p>
                            </TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>
            <p>University of helsinki: <a href={'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen2019/en/4e3fd9ad979ce9259137b5fdd913e189'} target={'blank'}>Full Stack Open 2020</a></p>
                            </TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>
            <p>Stepik: <a href={'https://stepik.org/cert/35871'} target={'blank'}>Python Programming</a></p>
                            </TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>
            <p>Stepik: <a href={'https://stepik.org/cert/40577'} target={'blank'}>Python: Basics and Usage</a></p>
                            </TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>
            <p>Coursera: <a href={'https://coursera.org/share/738a0ba86043d3fc41c55aa36cc99a72'} target={'blank'}>HTML, CSS, and Javascript for Web Developers</a></p>
                            </TableCell>
                        </TableRow>
                        <TableRow hover={true}>
                            <TableCell>
            <p>Coursera: <a href={'https://coursera.org/share/585bb83587402d28369ca30ca73558d1'} target={'blank'}> Front-End Web UI Frameworks and Tools: Bootstrap 4</a></p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EducationView
