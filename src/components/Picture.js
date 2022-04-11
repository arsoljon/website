import React, { useState } from 'react'
import { picture } from '../data'

const Picture = () => {
  const [pic, setPic] = useState(picture)
  let { id, url } = picture
  return (
    <>
      <h1>picture component</h1>
    </>
  )
}

export default Picture
