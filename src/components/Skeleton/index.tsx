import React from 'react'
import './index.css'

const Skeleton = ({ height = '100%', width = '100%', ...res }) => (
  <div
    style={{
      height,
      width,
      ...res,
    }}
  >
    <div className="skeleton_pulse" />
  </div>
)

export default Skeleton
