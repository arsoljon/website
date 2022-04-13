import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ id, title, picture, url, desc }) => {
  return (
    <div className="project">
      <div className="img-container">
        <Link to={`/project/${id}`}>
          <img src={picture} alt={title} />
        </Link>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href={url}>Github</a>
    </div>
  )
}

export default Project
