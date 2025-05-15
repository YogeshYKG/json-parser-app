import {
    SkipBack,
    Play,
    Pause,
    SkipForward,
  } from 'lucide-react';
import { useFilteredData } from '../logic/FilteredData';
import { useEffect } from 'react';
    
const TileSwiper = ({ styles }: { styles: CSSModuleClasses }) => {
    const {
        currentTrack,
        currentList,
        loopType,
      } = useFilteredData();

    useEffect (()=>{
        console.log("Current List",currentList);
        console.log("Current Track", currentTrack);
    }, [currentList, currentTrack])


  
  return (
    <>  
        
        <div className={styles.Musicname}>{currentTrack.title}</div>
        <div className={styles.ArtistName}>{currentTrack.artist}</div>

        <div className="">
            <audio 
                // ref={} 
                src={currentTrack.audioSrc} 
                preload="auto"
                onEnded={() => {
                }} 
            />
            <div className={styles.MusicProgress}>
            <div className={styles.TimePlayed}>{}</div>
            <div
                className={styles.Slider}
                // style={progressStyle}
                onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                }}
            />
            <div className={styles.TotalTime}>{}</div>
            </div>

            <div className={styles.PlayerControls}>
            <div className={styles.Back} onClick={()=>{}}>
                <SkipBack size="1.0rem" color="#fff" />
            </div>
            <div className={styles.PlayPause} onClick={()=>{}}>
                {true ? (
                <Pause size="1.2rem" color="#fff" />
                ) : (
                <Play size="1.2rem" color="#fff" />
                )}
            </div>
            <div className={styles.Next} onClick={()=>{}}>
                <SkipForward size="1.0rem" color="#fff" />
            </div>
            </div>
        </div>
    </>
  )
}

export default TileSwiper