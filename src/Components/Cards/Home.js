import React from 'react'
import{ BrowserRouter,Route,Routes}from 'react-router-dom'
import CardDetails from './CardDetails'
import Collection from './Collection'

const Home = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Collection/>}/>
        <Route path='/Card/:pokename' element={<CardDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home
