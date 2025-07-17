import React from 'react'
import { Container } from './styles'

const WorkingDays = () => {
    return (
        <Container id="stats-section" className="worked-days">
            <h1 className="heading-all">DAYS I WORKED</h1>
            <div className="work-d">
                <img src="https://ghchart.rshah.org/imlnr" alt="github-calander" />
            </div>
        </Container>
    )
}

export default WorkingDays