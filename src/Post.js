import React, { useState, useEffect } from 'react'
import Remarkable from 'remarkable'

import { GITHUB_API, GIST_URL } from './utils/constants'

const Post = ({ gistId }) => {
  const [postTitle, setTitle] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [postDM, setContent] = useState('')

  useEffect(() => {
    async function fetchData(api) {
      const result = await fetch(api).then((res) => res.json())

      const md = new Remarkable()

      const { description, updated_at, files } = result
      if (files && files[`README.md`]) {
        const content = files[`README.md`].content
        setTitle(description)
        setUpdatedAt(updated_at)
        setContent(md.render(content))
      } else {
        setTitle('not found!')
      }
    }

    if (gistId) {
      fetchData(`${GITHUB_API}${GIST_URL}${gistId}`)
    } else {
      setTitle('no gistId')
    }
  }, [gistId])

  return (
    <div>
      <h1>{postTitle}</h1>
      <p>{updatedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: postDM }} />
    </div>
  )
}

export default Post
