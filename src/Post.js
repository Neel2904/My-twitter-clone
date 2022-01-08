import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

//Icons
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'

function Post({
  displayName,
  userName,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar src=''></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Neel Gorasiya{" "} <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />
                {"@Neel2904"}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore accusantium fugiat placeat qui nisi tempora temporibus quas cupiditate mollitia nulla ab itaque laborum, cum vel. Quae laborum quam incidunt?</p>
          </div>
        </div>
        <img src="" alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
