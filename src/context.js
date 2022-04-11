import React, { useState, useContext, useReducer, useEffect } from 'react'
import { projects } from './projectData'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  projectList: projects,
}

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ ...state }}></AppContext.Provider>
}
