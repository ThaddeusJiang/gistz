import React, { useState, useEffect } from 'react'
import { converter } from './utils/md'

import { GITHUB_API, GIST_URL } from './utils/constants'

const Post = ({ gistId }) => {
  const [postTitle, setTitle] = useState('')
  const [updatedAt, setUpdatedAt] = useState('')
  const [postDM, setContent] = useState('')

  useEffect(() => {
    async function fetchData(api) {
      const result = await fetch(api).then((res) => res.json())

      const { description, updated_at, files } = result
      if (files && files[`README.md`]) {
        const content = files[`README.md`].content
        setTitle(description)

        setUpdatedAt(
          new Intl.DateTimeFormat('zh-Hans-CN').format(new Date(updated_at)),
        )
        setContent(converter.makeHtml(content))
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
    <div className="post">
      <h1>{postTitle}</h1>
      <p className="post_meta">{updatedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: postDM }} />
    </div>
  )
}

export default Post
