import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ id, title, picture, url, desc }) => {
  return (
    <div className="container border row my-5">
      <div className='projects-center my-3'>
      <h3>{title}</h3>
      <div className="img">
        <Link to={`/project/${id}`}>
          <img src={picture} alt={title} className='img-thumbnail w-50 d-block mx-auto my-2'/>
        </Link>
      </div>
      <div>
        <p>{desc}</p>
      </div>
      </div>
    </div>
  )
}

/* pre-bootstrap classnames: 
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
      <a href={url}>Repository</a>
    </div>
*/

export default Project
