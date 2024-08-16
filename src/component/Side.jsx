import React from 'react'
import '../App.css'
import home from '../assets/home.png'
import shorts from '../assets/shorts.png'
import sub from '../assets/sub.png'
import channel from '../assets/channel.png'
import history from '../assets/history.png'
import playlist from '../assets/playlist.png'
import yourvideo from '../assets/yourviedo.png'
import watch from '../assets/watch.webp'
import like from '../assets/like.png'
import channels1 from '../assets/channels1_profile.jpg'
import channels2 from '../assets/channels2_profile.jpg'
// import channels3 from '../assets/channels3_profile.jpg'



const Side = ({side, category,setCategory}) => {
  return (
    <>
    <div className={`side ${side?"":"small-side"}`}>
        <div className="sortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="home-logo" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={home} alt="home-logo"  /><p>Home</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={sub} alt="home-logo"  /><p>Subscriptions</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={channel} alt="home-logo"  /><p>Your channel</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={history} alt="home-logo"  /><p>History</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={playlist} alt="home-logo"  /><p>playlists</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={yourvideo} alt="home-logo"  /><p>Your videos</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)} >
                <img src={watch} alt="home-logo" /><p>Watch Later</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={like} alt="home-logo"  /><p>Liked videos</p>
            </div>
            <hr />
        </div>
        <div className="sub-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={channels1} alt="channels1" /> <p>BanderitaX</p>
            </div>
            <div className="side-link">
                <img src={channels2} alt="channels2" /> <p>عزيز الزامل</p>
            </div>
        </div>
    </div>
    </>
  )
}
export default Side