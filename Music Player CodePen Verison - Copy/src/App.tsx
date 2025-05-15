import styles from './styles/App.module.css';
import {
  ChevronLeft,
  Menu,
} from 'lucide-react';
import MusicPanel from './components/MusicPanel';
import TileSwiper from './components/TileSwiper';

import { FilteredDataProvider, useFilteredData } from './logic/FilteredData';

const AppBody = () => {
  const { currentTrack } = useFilteredData();

  return (
    <div className={styles.Container}>
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
          <TileSwiper styles={styles} />
          <div className={styles.Panel}>
            <MusicPanel styles={styles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <FilteredDataProvider>
      <AppBody />
    </FilteredDataProvider>
  );
}
