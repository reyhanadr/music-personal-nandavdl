import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import Lyrics from './Lyrics';
import { Song } from '@/types/songs';

interface Props {
  activeTab: 'now-playing' | 'lyrics';
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  formatTime: (seconds: number) => string;
  togglePlay: () => void;
}

export default function TabContent({ activeTab, song, ...playerProps }: Props) {
  return (
    <div className="min-h-[100px]">
      {activeTab === 'now-playing' ? (
        <div className="text-center">
          <SongInfo song={song} />
          <ProgressBar {...playerProps} song={song} />
          <Controls {...playerProps} duration={song.duration} />
        </div>
      ) : (
        <Lyrics song={song} />
      )}
    </div>
  );
}