import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form action="">
        <div className="tweetBox__input">
          <Avatar src=''></Avatar>
          <input type="text" placeholder="What's happening?" />
        </div>
        <input className='tweetBox__imgInput' type="text" placeholder="Enter image URL" />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
