import styles from './styles/App.module.css';
import {
  ChevronLeft,
  Menu,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Shuffle,
  Link,
  Heart,
  Repeat,
  Repeat1,
} from 'lucide-react';
import { useMusicPlayer } from './logic/useMusicPlayer';

function App() {
  const {
    currentTrack,
    audioRef,
    isPlaying,
    togglePlayPause,
    playNext,
    playPrev,
    currentTime,
    duration,
    isShuffled,
    isFavorited,
    loopType,
    toggleShuffle,
    toggleFavorite,
    toggleLoop,
  } = useMusicPlayer();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const progressStyle = {
    '--progress': `${(currentTime / duration) * 100}%`,
  } as React.CSSProperties;

  return (
    <div className={styles.Container}>
      <audio ref={audioRef} src={currentTrack.audioSrc} preload="auto" />
      <div className={styles.MusicCard}>
        <div className={styles.NavPanel}>
          <div className={styles.IconButton}>
            <ChevronLeft size="1rem" color="#fff" />
          </div>
          <div className={styles.SmlHeading}>Now Playing</div>
          <div className={styles.IconButton}>
            <Menu size="1rem" color="#fff" />
          </div>
        </div>

        <div className={styles.TileSwiper}>
          <img
            src={currentTrack.coverImage}
            alt="cover"
            className={styles.CoverImage}
          />
        </div>

        <div className={styles.Panel}>
          <div className={styles.Musicname}>{currentTrack.title}</div>
          <div className={styles.ArtistName}>{currentTrack.artist}</div>

          <div className={styles.MusicProgress}>
            <div className={styles.TimePlayed}>{formatTime(currentTime)}</div>
            <div
              className={styles.Slider}
              style={progressStyle}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newTime = (clickX / rect.width) * duration;
                if (audioRef.current) {
                  audioRef.current.currentTime = newTime;
                }
              }}
            />
            <div className={styles.TotalTime}>{formatTime(duration)}</div>
          </div>

          <div className={styles.PlayerControls}>
            <div className={styles.Back} onClick={playPrev}>
              <SkipBack size="1.0rem" color="#fff" />
            </div>
            <div className={styles.PlayPause} onClick={togglePlayPause}>
              {isPlaying ? (
                <Pause size="1.2rem" color="#fff" />
              ) : (
                <Play size="1.2rem" color="#fff" />
              )}
            </div>
            <div className={styles.Next} onClick={playNext}>
              <SkipForward size="1.0rem" color="#fff" />
            </div>
          </div>

          <div className={styles.MusicPanel}>
            <div className={styles.ControlIcon} onClick={toggleShuffle}>
              <Shuffle size="1rem" color={isShuffled ? 'var(--accent)' : '#fff'} />
            </div>
            <div
              className={styles.ControlIcon}
              onClick={() => window.open(currentTrack.url, '_blank')}
            >
              <Link size="1rem" color="#fff" />
            </div>
            <div className={styles.ControlIcon} onClick={toggleFavorite}>
              <Heart size="1rem" color={isFavorited ? 'var(--accent)' : '#fff'} />
            </div>
            <div className={styles.ControlIcon} onClick={toggleLoop}>
              {loopType === 'song' ? (
                <Repeat1 size="1rem" color="purple" />
              ) : loopType === 'playlist' ? (
                <Repeat size="1rem" color="green" />
              ) : (
                <Repeat size="1rem" color="#fff" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
