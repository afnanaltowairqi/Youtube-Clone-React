import React, { useEffect, useState } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Recommend = ({categoryId}) => {
    const [apiData, setApiData] = useState([])
    const fetchData = async () =>{
        await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=SA&videoCategoryId=${categoryId}&key=AIzaSyBx8IKmj1zuf2OFYVcmloN03-IZ5YEhlso`)
        .then(res=>res.json()).then(data=>setApiData(data.items))
    }

    useEffect(()=>{
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

  return (
    <div className='recommend '>
        {apiData.map((e,i)=>{
            return (
            <Link to={`/video/${e.snippet.categoryId}/${e.id}`} key={i}><div className="side-video">
            <img src={e.snippet.thumbnails.medium.url} alt=''/>
            <div className="info">
                <h4>{e.snippet.title}</h4>
                <p>{e.snippet.chaneelTitle}</p>
                <p>{convert(e.statistics.viewCount)} Views </p>
            </div>
        </div>
        </Link>
            )
        })}    
    </div>
  )
}

export default Recommend