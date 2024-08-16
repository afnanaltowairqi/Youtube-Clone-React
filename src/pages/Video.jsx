import React from 'react'
import '../App.css'
import PlayViedo from '../component/PlayViedo'
import Recommend from '../component/Recommend'
import { useParams } from 'react-router-dom'



const Video = () => {
  const {videoId,categoryId} = useParams();
  
  return (
    <div className='video-container'>
      <PlayViedo videoId={videoId}  />
      <Recommend categoryId={categoryId}/>
    </div>
  )
}

export default Video
