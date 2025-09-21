import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";
import { SfxContext } from "../../contexts/SfxContext";

function MusicPlayer() {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      playerRef.current.play();
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    clickSfx();
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });
    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(false);
            
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(true);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}

      <NextIcon
        onClick={() => shuffleHandler()}
        onMouseEnter={() => hoverSfx()}
      />

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <p>{playList[currentSong].split("/")}</p>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
