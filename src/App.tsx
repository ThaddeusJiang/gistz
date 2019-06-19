import React, { useState, useEffect } from 'react'

import Post from './Post'
import Home from './Home'
import User from './User'

import './App.css'

function App() {
  const { pathname } = document.location
  const [, userId, gistId = ''] = pathname.split('/')

  const [page, setPage] = useState('')

  useEffect(() => {
    if (userId !== '' && gistId === '') {
      setPage('user')
    } else if (userId !== '' && gistId !== '') {
      setPage('gist')
    } else {
      setPage('home')
    }
  }, [userId, gistId])

  return (
    <div>
      {page === 'home' && <Home />}
      {page === 'user' && <User />}
      {page === 'gist' && <Post gistId={gistId} />}
    </div>
  )
}

export default App
