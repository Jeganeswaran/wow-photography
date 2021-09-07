import React from 'react'
import { OpenImg } from '../modals/modalbtns'

const Post = ({ thumbnail, photo, title }) => {
  return (
    <div className="post">
      <div className="post-img-holder">
        <div className="post-img">
          <OpenImg modalProps={{ image: photo }} src={thumbnail} alt={''} />
        </div>
      </div>
      <div className="p-1">
        {title && <span>© {title}</span>}
        {/* <span>4th Apr 2021</span> */}
      </div>
    </div>
  )
}

export default Post
