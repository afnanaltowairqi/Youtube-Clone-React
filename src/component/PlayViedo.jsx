import React from 'react';
// import axios from 'axios';
import '../App.css';
// import video from '../assets/video.mp4';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import share from '../assets/share.png';
import Profile from '../assets/profile.jpg'
import axios from 'axios'
import channels2 from '../assets/channels2_profile.jpg'

const PlayVideo = ({ videoId }) => {
  const name =localStorage.getItem("name");
  const [comments, setComments]= React.useState({
    comment: "",
    id: "",
});
const [newComments, setNewComments] = React.useState([]);


const postComment=()=>{
  axios.post('https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet',{
      comment: comments.comment,
  }).then(()=>{
    setNewComments([...newComments, comments]);
  })
}

React.useEffect(() => {
  axios.get('https://66804b9b56c2c76b495bb562.mockapi.io/api/tweet')
    .then( response => {
      setNewComments(response.data);
    })
  }, [comments]);

    
    // const [apiData, setApiData] = React.useState(null);
    // const [channel, setChannel] = useState(null);
    // const [comments, setComments] = useState([]);

    // const fetchVideoData = async () => {
    //     const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBx8IKmj1zuf2OFYVcmloN03-IZ5YEhlso`;
    //     const res = await fetch(videoDetailsUrl);
    //     const data = await res.json();
    //     setApiData(data.items[0]);
    // };

    // React.useEffect(() => {
    //     axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBx8IKmj1zuf2OFYVcmloN03-IZ5YEhlso`)
    //       .then( response => {
    //         setApiData(response.data.items[0]);
    //       }).catch(error => {
    //         console.log(error);
    //       });
    // },[])


    // const fetchOtherData = async () => {
    //     const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=AIzaSyBx8IKmj1zuf2OFYVcmloN03-IZ5YEhlso`;
    //     const channelRes = await fetch(channelDataUrl);
    //     const channelData = await channelRes.json();
    //     setChannel(channelData.items[0]);

    //     const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=AIzaSyBx8IKmj1zuf2OFYVcmloN03-IZ5YEhlso`;
    //     const commentRes = await fetch(commentUrl);
    //     const commentData = await commentRes.json();
    //     setComments(commentData.items);
    // };

    // useEffect(() => {
    //     fetchVideoData();
    // }, [videoId]);

    // useEffect(() => {
    //     if (apiData) {
    //         fetchOtherData();
    //     }
    // }, [apiData]);

    return (
        <div className='play-video'>
            {/* <video src={video} controls autoPlay muted></video> */}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <h3>Title</h3>
            <div className="play-video-info">
                <p> 1.02M &bull; subscribers</p>
                <div>
                    <span><img className='like-icon' src={like} alt='like-icon' /> 155 </span>
                    <span><img className='dislike-icon' src={dislike} alt='dislike-icon' /> </span>
                    <span><img src={share} alt='share-icon' /> share</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channels2} alt="channel-icon" />
                <div>
                    <p>Aziz Alzamel</p>
                    <span>2M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>Description</p>
                <hr />

            <h4>150 Comments</h4>
            <div className="comment flex flex-col">
              <div className="w-full p-2">
                <textarea  className=" text-gray-900 placeholder-gray-400 w-full h-10 bg-transparent border focus:outline-none resize-none "
                placeholder="Comment here"
                value={comments.comment}
                onChange={(e) => {
                  setComments({ ...comments, comment: e.target.value });
                }}
                ></textarea>
                  <p onClick={postComment} className="bg-[#b9b9b9] hover:bg-gray-400 text-white rounded-sm py-1 px-4 ml-auto mr-1 cursor-pointer w-[5vw] ">
                    <span className="font-bold text-sm">send</span>
                  </p>
              </div>

              {newComments.map((e,i) => (
              <div key={i}> 
                <img  src={Profile} alt="author-profile" />
                        <div>
                            <h3>{name} <span> 1 day ago</span></h3>
                            <p>{e.comment}</p>
                            <div className="comment-action">
                                <img src={like} alt='like-icon' />
                                <span></span>
                                <img src={dislike} alt='dislike-icon' />
                            </div>
                        </div>
                  </div>       
              ))}
                </div>   
            </div>
        </div>
    );
};

export default PlayVideo;
