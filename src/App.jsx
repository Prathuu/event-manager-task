import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import AddEvent from './pages/AddEvent'
import EventList from './pages/EventList'
const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<AddEvent/>} />
        <Route path='/event-lists' element={<EventList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App