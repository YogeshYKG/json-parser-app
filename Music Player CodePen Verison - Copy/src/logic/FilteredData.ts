import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import musicData from '../data/musicData.json';

const FilteredDataContext = createContext(null);

export const FilteredDataProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentList, setCurrentList] = useState(() =>
    musicData.map((track) => ({ ...track }))
  );
  const [isShuffled, setIsShuffled] = useState(false);
  const [loopType, setLoopType] = useState<'none' | 'song' | 'playlist'>('none');

  const currentTrack = currentList[currentTrackIndex];
  const isFavorited = currentTrack?.favorited || false;

  const toggleShuffle = () => {
    const currentTrack = currentList[currentTrackIndex];

    if (!isShuffled) {
      const shuffled = [...currentList]
        .filter((track) => track.id !== currentTrack.id)
        .sort(() => Math.random() - 0.5);
      const newList = [currentTrack, ...shuffled];
      setCurrentList(newList);
      setCurrentTrackIndex(0);
      setIsShuffled(true);
    } else {
      const original = musicData.map((track) => ({ ...track }));
      const index = original.findIndex((track) => track.id === currentTrack.id);
      setCurrentList(original);
      setCurrentTrackIndex(index);
      setIsShuffled(false);
    }
  };

  const value = useMemo(() => ({
    currentTrackIndex,
    setCurrentTrackIndex,
    currentTrack,
    currentList,
    isShuffled,
    isFavorited,
    loopType,
    setLoopType,
    toggleShuffle,
  }), [currentTrackIndex, currentList, isShuffled, loopType]);

  return (
    <FilteredDataContext.Provider value={value}>
      {children}
    </FilteredDataContext.Provider>
  );
};

export const useFilteredData = () => {
  const context = useContext(FilteredDataContext);
  if (!context) {
    throw new Error('useFilteredData must be used within a FilteredDataProvider');
  }
  return context;
};
