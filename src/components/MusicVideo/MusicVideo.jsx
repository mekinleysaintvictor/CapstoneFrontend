import React, { useState, useEffect } from "react";
import axios from 'axios';

const MusicVideo = ({user}) => {
    const [postedVideo, setPostedVideo] = useState();
    const [uploadVideo, setUploadVideo] = useState();

    async function postProfileVideo(){
        let response = await axios.get();
        setPostedVideo();
    }

    return(
        <div>

        </div>
    )
}

export default MusicVideo;