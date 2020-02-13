import React from 'react'
import Project from './Project'
import './PageContent.css'

function PageContent() {
    return (
        <div className="PageHeader">
            <Project title="Tetris Dots" image="/images/corgi1.jpeg" link="#" />
            <Project title="Zombie Server" image="/images/corgi2.jpg" link="#" />
            <Project title="Amazing Colors" image="/images/corgi3.jpeg" link="#" />
            <Project title="Flip Toggle" image="/images/corgi1.jpeg" link="#" />
            <Project title="121 Second St" image="/images/corgi2.jpg" link="#" />
            <Project title="Slide Show" image="/images/corgi3.jpeg" link="#" />
        </div>
    )
}

export default PageContent