import { Shuffle, Link, Heart, Repeat, Repeat1 } from "lucide-react";
import { useFilteredData } from "../logic/FilteredData";

const MusicPanel = ({ styles }: { styles: CSSModuleClasses }) => {
  const {
    currentTrack,
    isShuffled,
    isFavorited,
    loopType,
    toggleShuffle,
    toggleFavorite,
    toggleLoop,
  } = useFilteredData();

  return (
    <div className={styles.MusicPanel}>
      <div className={styles.ControlIcon} onClick={toggleShuffle}>
        <Shuffle size="1rem" color={isShuffled ? "var(--accent)" : "#fff"} />
      </div>

      <div
        className={styles.ControlIcon}
        onClick={() => currentTrack?.url && window.open(currentTrack.url, "_blank")}
      >
        <Link size="1rem" color="#fff" />
      </div>

      <div className={styles.ControlIcon} onClick={toggleFavorite}>
        <Heart size="1rem" color={isFavorited ? "var(--accent)" : "#fff"} />
      </div>

      <div className={styles.ControlIcon} onClick={toggleLoop}>
        {loopType === "song" ? (
          <Repeat1 size="1rem" color="purple" />
        ) : loopType === "playlist" ? (
          <Repeat size="1rem" color="green" />
        ) : (
          <Repeat size="1rem" color="#fff" />
        )}
      </div>
    </div>
  );
};

export default MusicPanel;
