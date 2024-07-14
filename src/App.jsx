import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Nav from './components/nav'
import Home from './components/home'
import PostPage from './components/postPage'
import Contest from './components/contest'
import ContestPage from './components/contestPage'
import About from './components/about'
import VideoPage from './components/videoPage'
import Missing from './components/missing'
import LowerSection from './components/lowerSection'
import { DataProvider } from './context/dataContext'
import SearchPage from './components/searchPage'

function App() {

  
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/post/:id' element={<PostPage />}/>
          <Route path='/contest' element={<Contest />}/>
          <Route path='/contest/:id' element={<ContestPage />}/>
          <Route path='/AboutPg' element={<About />}/>
          <Route path='*' element={<Missing />}/>
          <Route eaxact path='/search' element={<SearchPage/>}/>
          <Route exact path='/video' element={<VideoPage/>}/>
        </Routes>
        <LowerSection />
      </DataProvider>
    </div>
  )
}

export default App
