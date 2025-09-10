import { Song } from '@/types/songs';
import { Fragment } from 'react';

interface Props {
  song: Song;
}

export default function Lyrics({ song }: Props) {
  const lyrics = song.lyrics || 'Lirik belum tersedia';

  return (
    <div className="mt-4 p-4 text-center text-gray-700 dark:text-gray-300">
      <p className="font-bold mb-4">{song.title} - {song.artist}</p>
      <div className="max-h-[460px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 text-sm text-gray-500 dark:text-gray-400 italic">
      <p>
        {lyrics.split('\n').map((line, i) => (
          <Fragment key={i}>
            {line}
            <br />
          </Fragment>
        ))}
      </p>
      </div>
    </div>
  );
}