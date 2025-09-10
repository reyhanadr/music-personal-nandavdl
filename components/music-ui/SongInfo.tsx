import Image from 'next/image';
import { Song } from '@/types/songs';

interface Props {
  song: Song;
}

export default function SongInfo({ song }: Props) {
  return (
    <div className="relative aspect-square w-full">
      <Image
        src={song.coverUrl}
        alt={`${song.title} cover`}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}