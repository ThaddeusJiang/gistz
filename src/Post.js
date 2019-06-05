import React, { useState, useEffect } from 'react'
import { GITHUB_API, GIST_URL } from './utils/constants'
import { converter } from './utils/md'
import Skeleton from './components/Skeleton'

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
      <h1>
        {postTitle === '' ? (
          <Skeleton height="2rem" width="15rem" />
        ) : (
          postTitle
        )}
      </h1>
      <p className="post_meta">
        {updatedAt === '' ? <Skeleton height="1rem" width="8rem" /> : updatedAt}
      </p>
      {postDM === '' ? (
        <Skeleton height="100vh" width="100%" />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: postDM }} />
      )}
    </div>
  )
}

export default Post
