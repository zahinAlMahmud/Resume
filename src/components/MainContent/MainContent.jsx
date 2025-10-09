import React from 'react'
import Home from '../../pages/Home.jsx'
import About from '../../pages/About.jsx'
import Contact from '../../pages/Contact.jsx';
import Course  from '../../pages/Course'
import Education  from '../../pages/Education'
import Experiance  from '../../pages/Experiance'
import Skill from '../../pages/Skill.jsx'


 function MainContent() {
  return (
    <div>
      <Home/>
      <About/>
      <Contact/>
      <Course/>
      <Education/>
      <Experiance/>
      <Skill/>
    </div>
  )
}
export default MainContent;