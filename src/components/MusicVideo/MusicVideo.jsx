import axios from "axios";
import React, {useEffect, useState} from "react";

const VideoPlayer = () => {
    
    const [video, setVideo] = useState();
    
    // useEffect(() => {
    //     getVideo();
    // }, []);



    return ( 
        <center>
        <div class="embed-responsive embed-responsive-4by3">
            <div className="right floated">
                <iframe class="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/tR4JzqG9zgM/`}
                    frameBorder="0">
                </iframe>
            </div>   
        </div>
        </center>
    );
}
 
export default VideoPlayer;