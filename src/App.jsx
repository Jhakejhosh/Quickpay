import React, {lazy, Suspense} from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Loader from './utils/Loader'
const Home = lazy(() => import("./Pages/Home"))
const Service = lazy(() => import("./Pages/Service"))
const Solution = lazy(() => import("./Pages/Solution"))
const About = lazy(() => import("./Pages/About"))
const Team = lazy(() => import("./Pages/Team"))
const Support = lazy(() => import("./Pages/Support"))

function App() {

  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/solution" element={<Solution/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </Suspense>  
    </>
  )
}

export default App
