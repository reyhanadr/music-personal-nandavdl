/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@/utils/supabase/server';
import SongPlayer from '@/components/music-ui/SongPlayer'; // Adjust path
import { Song } from '@/types/songs'; // Buat interface di types/song.ts

// Force dynamic rendering: Fetch real-time per request
export const dynamic = 'force-dynamic';

interface Props {
  params: { id?: string }; // Jika butuh dynamic route
}

export default async function Home({ params }: Props) {
  let currentSong: Song | null = null;

  try {
    const supabase = await createClient(); // Server client
    const { data: songs, error } = await supabase
      .from('songs_nanda')
      .select('*')
      .limit(1);

    if (error) throw error;
    if (songs && songs.length > 0) {
      currentSong = songs[0] as Song;
    }
  } catch (error) {
    console.error('Error fetching song:', error);
    // Bisa return error page atau null
  }

  if (!currentSong) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No song found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SongPlayer currentSong={currentSong} />
    </div>
  );
}