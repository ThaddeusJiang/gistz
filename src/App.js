import React, { useState, useEffect } from 'react'
import Remarkable from 'remarkable'

import typography from './utils/typography'

import './App.css'

const GITHUB_API = `https://api.github.com/`
const GIST_URL = `gists/`

function App() {
  const [postTitle, setTitle] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [postDM, setContent] = useState('')

  useEffect(() => {
    async function fetchData() {
      const { pathname } = document.location
      const [, , gistId = '52eac5dda788ab05fc4dd0b08ff8d6f6'] = pathname.split(
        '/',
      )

      const result = await fetch(`${GITHUB_API}${GIST_URL}${gistId}`).then(
        (res) => res.json(),
      )

      const md = new Remarkable()

      const { description, updated_at, files } = result
      if (files[`README.md`]) {
        const content = files[`README.md`].content
        setTitle(description)
        setUpdatedAt(updated_at)
        setContent(md.render(content))
      } else {
        setTitle('not found!')
      }
    }

    fetchData()
  })

  useEffect(() => {
    typography.injectStyles()
  })

  return (
    <div className="App">
      <h1>{postTitle}</h1>
      <p>{updatedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: postDM }} />
    </div>
  )
}

export default App
