"use client"
import React from "react";
import Image from "next/image";
import SoundIcon from "@/assets/images/speaker.png";
import DisabledSoundIcon from "@/assets/images/disabled-sound.png";

export default function AudioSection() {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false)
    } else {
      audioRef.current.play();
      setIsPlaying(true)
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} controls={true} id="myAudio" autoPlay={true}>
        <source src={"/music.mp3"} type="audio/mp3"/>
        Your browser does not support the audio element.
      </audio>
      <button onClick={playAudio}>
        <Image src={isPlaying ? SoundIcon : DisabledSoundIcon} alt={'Play'} width={25} height={25} />
      </button>
    </div>
  )
}