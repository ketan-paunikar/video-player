import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import videoPlaylist from "../MockData/playlist.json"
import "./Videoplayer.css"

const Player = () => {

    const [playlist, setPlaylist] = useState(videoPlaylist)
    const [URL, setVideoURL] = useState("")
    const [videoDetails, setVideoDetails] = useState()

    const srcRef = useRef(URL);

    // const changeSrc = () => {
    //     if (srcRef.current) {
    //         console.log(srcRef.current.src, "src")
    //         srcRef.current.src = URL
    //     }
    // }

    useEffect(() => {
        if (srcRef.current) {
            srcRef.current?.load();
        }
    }, [URL]);

    return (
        <div className="player_content">
            <div className="p-4 video_div">
                <video
                    ref={srcRef}
                    className="video_tag"
                    controls
                    autoPlay
                    loop
                    muted
                >
                    <source
                        src={URL}
                        type="video/mp4" />
                </video>
                <div className="mt-8 w-full">
                    {
                        videoDetails && (
                            <>
                                <p className="font-medium text-left">Title: {videoDetails.title}</p>
                                <p className="font-medium text-left">Author: {videoDetails.author}</p>
                            </>
                        )
                    }
                </div>
            </div>

            <div className="p-4 playlist_div">
                <p className="pb-4 font-sans font-bold text-[20px] text-gray-600">Queue</p>
                {playlist.map((video, i) => {
                    return (
                        <div
                            className="queue mb-3"
                            key={i}
                            onClick={() => {
                                console.log(video)
                                setVideoDetails(video)
                                setVideoURL(video.videoUrl)
                            }}
                        >
                            <h6 className="cursor-pointer text-white">
                                {video.title}
                            </h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Player
