import { useState, useRef } from 'react'
import './musicaplayer.css'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="music-player">
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <audio ref={audioRef} src="/music/Dua-final-2.mp3" loop />
    </div>
  )
}

export default MusicPlayer
