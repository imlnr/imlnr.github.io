import React from 'react'
import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'

const WorkingDays = () => {
    return (
        <Container id="stats-section" className="worked-days" >
            <h1 className="heading-all">DAYS I WORKED</h1>
            <ScrollAnimation animateIn="fadeIn" delay={0.1 * 1000} className='work-d' >
                <img src="https://ghchart.rshah.org/imlnr" alt="github-calander" />
            </ScrollAnimation>
        </Container>
    )
}

export default WorkingDays