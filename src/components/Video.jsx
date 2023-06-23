import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useMovies } from "../context/MovieProvider";

function PlayVideo() {
  const { isPlaying } = useMovies();
  const [shouldPlay, setShouldPlay] = useState(true);
  const playerRef = useRef(null);
  const { isMuted } = useMovies();
  useEffect(() => {
    if (isPlaying) {
      // Start playing the video when the modal is opened
      setShouldPlay(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (shouldPlay) {
      // Start playing the video
      playerRef.current.seekTo(0);
    }
  }, [shouldPlay]);

  useEffect(() => {
    // Set a timer to stop the video playback after 5 seconds
    const timer = setTimeout(() => {
      setShouldPlay(false);
    }, 10000);

    return () => {
      // Clear the timer when the component unmounts or shouldPlay changes
      clearTimeout(timer);
    };
  }, [shouldPlay]);

  return (
    <div className="w-full h-96">
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=5jY1ecibLYo"
        width="100%"
        height="100%"
        controls={false}
        playing={shouldPlay}
        muted={isMuted}
      />
    </div>
  );
}

export default PlayVideo;
