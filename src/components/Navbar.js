import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { links, projects, picture } from '../data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const [allProjects, setAllProjects] = useState(projects)
  const [scroll, setScroll] = useState(false)
  
  const [counter, setCounter] = useState(0)

  
  const handleScroll = () => {
    const navHeight = .15
    const totalY = window.innerHeight - (window.innerHeight * navHeight)
    if(window.scrollY < totalY){
      console.log("nav should change back!")
      setScroll(false)
    } else{
      console.log("nav should change!")
      setScroll(true)
    }

  }

  const setShowImage = () => {
    setCounter(counter + 1)
  }
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    console.log(scroll)
    window.addEventListener('scroll', handleScroll);
    console.log("hello world")
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },)

  return (
    <nav className={scroll ? 'nav scrolled' : 'nav'}>
      <div className={scroll ? "nav-center-scrolled": 'nav-center'}>
        <div className="nav-header">
          <h2 className="title"><span className="title-big-letter">J</span>onathan<span className="title-big-letter">A</span>rsola</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
          <h2>...</h2>
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='slideshow'>
        <img src={`${projects[0].picture}`} alt={`Project ${projects[0].id}`} class='active'></img>
        <img src={`${projects[1].picture}`} alt={`Project ${projects[1].id}`} ></img>
        <img src={`${projects[2].picture}`} alt={`Project ${projects[2].id}`} ></img>
        <img src={`${projects[3].picture}`} alt={`Project ${projects[3].id}`} ></img>
      </div>
    </nav>
  )
}
/*
        {projects.map((project)=>{
          console.log(project.url)
          return <img src={`${project.picture}`} alt={`Project ${project.id}`} class={project.id === (counter % projects.length) + 1 ? 'active' : ''}></img>
        })}
*/
export default Navbar
