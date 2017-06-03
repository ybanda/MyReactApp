import React from 'react';

const VideoDetail = ({video})=>{

    if(!video){
        return (
            <div className="fa fa-spinner fa-spin fa-3x fa-fw">
            Loading...
        </div>
        );
    }

    const videoId = video.id.videoId;
    //const videoUrl="https://www/youtube.com/embed/"+videoId;
     const videoUrl=`https://www.youtube.com/embed/${videoId}`;
      return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-reponsive-item" src={videoUrl}></iframe>
            </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>
    );
}
export default VideoDetail;