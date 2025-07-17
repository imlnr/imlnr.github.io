import React from 'react'
import { Container } from './style'
import ScrollAnimation from 'react-animate-on-scroll'

const Statistics = () => {
    return (
        <Container id="statistics" className="calander-stats">
            <h1 className="heading-all">STATISTICS</h1>
            <ScrollAnimation animateIn="fadeIn" delay={0.1 * 1000}>
                <div className="stats-card-inn">
                    <div className="stats-1" id="stats-1-id">
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=imlnr&theme=vue-dark&hide_border=false"
                            alt="streak stats" />
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=imlnr&theme=vue-dark&show_icons=true&hide_border=false&layout=compact"
                            alt="top langs" />
                        <img src="https://github-readme-stats.vercel.app/api?username=imlnr&theme=vue-dark&show_icons=true&hide_border=false&count_private=true"
                            alt="readme stats" />
                    </div>
                </div>
            </ScrollAnimation>
        </Container>
    )
}

export default Statistics