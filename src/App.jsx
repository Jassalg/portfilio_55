import React from 'react'
import HeroContainer from './containers/HeroContainer'
import ProjectContainer from './containers/ProjectContainer'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <HeroContainer />
      <ProjectContainer />
    </div>
  )
}

export default App