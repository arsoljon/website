import React from 'react'
import { projects } from '../data'
import { Link, useParams } from 'react-router-dom'
const SingleProject = () => {
  const { id } = useParams()
  const [project, setProject] = React.useState(
    projects.filter((project) => project.id == id)
  )

  if (!project) {
    return <h2>No project to be seen.</h2>
  }

  const { title, picture, url, desc } = project[0]
  return (
    <div className="focused-project">
      <Link to="/projects">Back</Link>
      <div className="focused img-container">
        <img src={picture} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href={url}>Repository</a>
    </div>
  )
}

export default SingleProject
