import { useState, useRef, useEffect } from 'react';
import musicData from '../data/musicData.json';

export function useMusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loopType, setLoopType] = useState<'none' | 'song' | 'playlist'>('none');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = musicData[currentTrackIndex];

  // Shuffle logic
  const shuffledData = isShuffled ? [...musicData].sort(() => Math.random() - 0.5) : musicData;

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const handleLoadedData = () => {
      setDuration(audio.duration);
    };

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    audio.addEventListener('loadeddata', handleLoadedData);

    if (isPlaying) {
      audio.play().catch((err) => console.error('Error playing audio:', err));
      audio.addEventListener('timeupdate', updateTime);
    } else {
      audio.pause();
      audio.removeEventListener('timeupdate', updateTime);
    }

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, [isPlaying, currentTrackIndex]);

  // Loop toggle logic
  const toggleLoop = () => {
    if (loopType === 'none') {
      setLoopType('song'); // First click: Song loop
    } else if (loopType === 'song') {
      setLoopType('playlist'); // Second click: Playlist loop
    } else {
      setLoopType('none'); // Third click: Disable loop
    }
  };

  const playNext = () => {
    if (loopType === 'song') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      setCurrentTrackIndex((prev) => (isShuffled ? Math.floor(Math.random() * musicData.length) : (prev + 1) % musicData.length));
      setIsPlaying(true);
    }
  };

  const playPrev = () => {
    if (loopType === 'song') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      setCurrentTrackIndex((prev) => (prev === 0 ? musicData.length - 1 : prev - 1));
      setIsPlaying(true);
    }
  };

  const toggleShuffle = () => setIsShuffled((prev) => !prev);
  const toggleFavorite = () => setIsFavorited((prev) => !prev);

  return {
    currentTrack,
    audioRef,
    isPlaying,
    togglePlayPause: () => setIsPlaying((prev) => !prev),
    playNext,
    playPrev,
    currentTime,
    duration,
    isShuffled,
    isFavorited,
    toggleShuffle,
    toggleFavorite,
    toggleLoop,
    loopType,
    shuffledData, // Return the shuffled data for rendering
  };
}
