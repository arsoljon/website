import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleProject from './pages/SingleProject'
import Error from './pages/Error'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Picture from './components/Picture'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Picture />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:id">
            <SingleProject />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
