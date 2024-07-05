import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import channels from "./Channels";


const ChannelList = ({ onPlay }) => {
  const host = "http://localhost:5000";
  const urlInitial = [];
  const [channel, setChannel] = useState([]);
  useEffect(()=>{
    fetch("https://barflixbe.onrender.com/getChannel",{
      method:"GET",
    })
    .then((res)=> res.json())
    .then((data)=>{
       console.log(data,"channels")
      setChannel(data)
      console.log(channel)
    })
  },[])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="">
      <Carousel responsive={responsive}>
        {channel.map((c) => (
          <div key={c.id}>
          <button className="btn btn-outline-secondary" onClick={()=>onPlay(c.url)}><img style={{height:"140px", width:"318px"}} src={c.iUrl} alt="" />
          <p style={{color:'black'}}>{c.name}</p>
          </button>
          </div>
        ))}
      </Carousel>
      
    </div>
    
  );
};

export default ChannelList;
