import React from 'react';

import VideoDetail from './video_details';

const VideoListItem =({video,onVideoSelect})=>{
   // const video = props.video;
   console.log(video);
   const imgUrl = video.snippet.thumbnails.default.url;
   const heading = video.snippet.title;
    return (
             <li onClick={()=>onVideoSelect(video)} className="list-group-item">
                 <div className="video-list media">
                     <div className="media-left">
                         <img className="media-object" src={imgUrl}/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{heading}</h4>
                            
                    </div>
                </div>
            </li>
            );

}

export default VideoListItem;