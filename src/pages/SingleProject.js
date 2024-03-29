import React from 'react'
import { projects } from '../data'
import { Link, useParams } from 'react-router-dom'
import Error from './Error'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
const SingleProject = () => {
  const { id } = useParams()
  const [project, setProject] = React.useState(
    projects.filter((project) => project.id == id)
  )


  if (project.length == 0) {
    return <Error />
  } else {
    const { title, picture, url, desc, tools } = project[0]
    return (
      <div className="focused-project my-5">
        <h3>{title}</h3>
        <div className='container border'>
        
        <div className="cycle-projects">
          <div className="focused img-container my-5">
            <img src={picture} alt={title} />
          </div>
        </div>
        <div>
          
          <p>{desc}</p>
          <p>
            Tools:{' '}
            {tools.map((tool, index) => {
              return (
                <>
                  {tool}
                  {tools.length === index + 1 ? '' : ', '}
                </>
              )
            })}
          </p>
        </div>
        <div className='my-3'>
        <a href={url} target="_blank">Repository</a>
        </div>
      </div>
      </div>
    )
  }
}

export default SingleProject
