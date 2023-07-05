import React, { useState } from 'react'
import { projects } from '../data'
import Project from './Project'

const ProjectList = () => {
  const [allProjects, setAllProjects] = useState(projects)
  return (
    <section>
      <h2 className="section-title">projects</h2>
      <div className="container border my-5">
        <div className="projects-center my-3">
          {projects.map((project) => {
            console.log(project.picture)
            return <Project key={project.id} {...project} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectList
