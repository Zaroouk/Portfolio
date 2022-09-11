import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Landing from './Landing'
import NavBar from './NavBar';


function HomePage(theme: any) {
  const [type, setTheme] = useState(0);

  return (


      <div>
        <NavBar />
        <Landing />
        <AboutMe />
      </div>
  )
}

export default HomePage