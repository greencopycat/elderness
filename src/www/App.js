import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Main from './views/Main'
import Populate from './views/populate'


// import logos from './logos.svg'
import './App.css'



class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/populate" element={<Populate />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    )
  }
}

export default App
