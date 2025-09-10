/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import Tabs from './Tabs';
import TabContent from './TabContent';
import { Song } from '@/types/songs';

interface Props {
  currentSong: Song;
}

export default function SongPlayer({ currentSong }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeTab, setActiveTab] = useState<'now-playing' | 'lyrics'>('now-playing');
  const playerRef = useRef<any>(null);

  // YouTube player options
  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1,
    },
  };

  // onPlayerReady
  const onPlayerReady = (event: any) => {
    playerRef.current = event.target;
    const interval = setInterval(() => {
      if (playerRef.current) {
        const time = Math.floor(playerRef.current.getCurrentTime() || 0);
        setCurrentTime(time);
      }
    }, 1000);
    return () => clearInterval(interval);
  };

  // togglePlay
  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  // seekTo
  const seekTo = (time: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(time, true);
      setCurrentTime(time);
    }
  };

  // formatTime
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const playerProps = {
    isPlaying,
    currentTime,
    duration: currentSong.duration,
    onSeek: seekTo,
    formatTime,
    togglePlay,
  };

  return (
    <>
      {/* Hidden YouTube Player */}
      <div className="hidden">
        <YouTube
          videoId={currentSong.youtubeId}
          opts={opts}
          onReady={onPlayerReady}
        />
      </div>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <TabContent activeTab={activeTab} song={currentSong} {...playerProps} />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </>
  );
}