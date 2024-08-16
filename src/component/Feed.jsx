import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import moment from 'moment'


const Feed = ({category}) => {
    const [video, setVideo]= React.useState([])

    const fetchData=async () =>{
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=SA&videoCategoryId=${category}&key=AIzaSyBx8IKmj1zuf2OFYVcmloN03-IZ5YEhlso`
      await fetch(videoList_url).then(response=>response.json()).then(data=>setVideo(data.items))
    }

    React.useEffect(()=>{
      fetchData();
    },[])

    const convert = (value)=> {
      if(value>=1000000){
        return Math.floor(value/1000000)+"M";
      }
      else if (value>=1000) {
        return Math.floor(value/1000)+"K";
      }
      else return value
    }
    
    // React.useEffect(() => {
    //     axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=SA&videoCategoryId=${category}&key=AIzaSyAUDJ4OlGo0BcNTLx6RyGuSSbHT0BytGr8`)
    //       .then( response => {
    //         setVideo(response.data.items);
    //       }).catch(error => {
    //         console.log(error);
    //       });
    // },[category])

  return (
    <div className="feed">
        {video.map((e,i)=>{
            return(
            <Link key={i} to={`video/${e.snippet.categoryId}/${e.id}`} className='card'>
                <img src={e.snippet.thumbnails.medium.url} alt="thumbnail1" />
                <h2>{e.snippet.title}</h2>
                <h3>{e.snippet.channelTitle}</h3>
                <p>{convert(e.statistics.viewCount)} views &bull; {moment(e.snippet.publishedAt).fromNow()}</p>
            </Link> 
            )
        })}
    </div>
  )
}

export default Feed