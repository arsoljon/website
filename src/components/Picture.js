import React, { useState } from 'react'
import { picture } from '../data'

const Picture = () => {
  const { id, url } = picture
  return (
    <div className="container">
      <div className="person">
        <img src={url} alt="Jonathan" className="person img"></img>
      </div>
    </div>
  )
}

export default Picture
