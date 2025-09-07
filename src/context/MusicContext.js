import React, { createContext, useContext, useReducer, useRef, useEffect } from 'react';
import { musicLibrary, shufflePlaylist } from '../data/musicLibrary';

const MusicContext = createContext();

// Action types
const ACTIONS = {
  SET_CURRENT_TRACK: 'SET_CURRENT_TRACK',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  SET_DURATION: 'SET_DURATION',
  SET_CURRENT_TIME: 'SET_CURRENT_TIME',
  SET_VOLUME: 'SET_VOLUME',
  TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
  TOGGLE_REPEAT: 'TOGGLE_REPEAT',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_QUEUE: 'TOGGLE_QUEUE'
};

// Initial state
const initialState = {
  currentTrack: musicLibrary[0] || null,
  isPlaying: false,
  duration: 0,
  currentTime: 0,
  volume: 0.7,
  isShuffled: false,
  repeatMode: 'none', // 'none', 'one', 'all'
  isLoading: false,
  error: null,
  playlist: musicLibrary,
  isQueueOpen: false
};

// Reducer
const musicReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_TRACK:
      return { ...state, currentTrack: action.payload, error: null };
    case ACTIONS.PLAY:
      return { ...state, isPlaying: true, error: null };
    case ACTIONS.PAUSE:
      return { ...state, isPlaying: false };
    case ACTIONS.SET_DURATION:
      return { ...state, duration: action.payload };
    case ACTIONS.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case ACTIONS.SET_VOLUME:
      return { ...state, volume: action.payload };
    case ACTIONS.TOGGLE_SHUFFLE:
      return { 
        ...state, 
        isShuffled: !state.isShuffled,
        playlist: !state.isShuffled ? shufflePlaylist(musicLibrary) : musicLibrary
      };
    case ACTIONS.TOGGLE_REPEAT:
      const modes = ['none', 'all', 'one'];
      const currentIndex = modes.indexOf(state.repeatMode);
      const nextIndex = (currentIndex + 1) % modes.length;
      return { ...state, repeatMode: modes[nextIndex] };
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ACTIONS.TOGGLE_QUEUE:
      return { ...state, isQueueOpen: !state.isQueueOpen };
    default:
      return state;
  }
};

// Music Provider
export const MusicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicReducer, initialState);
  const audioRef = useRef(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.preload = 'metadata';
    
    // Set initial volume
    audioRef.current.volume = state.volume;

    // Audio event listeners
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      dispatch({ type: ACTIONS.SET_DURATION, payload: audio.duration });
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    };

    const handleTimeUpdate = () => {
      dispatch({ type: ACTIONS.SET_CURRENT_TIME, payload: audio.currentTime });
    };

    const handleEnded = () => {
      handleNext();
    };

    const handleError = () => {
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to load audio file' });
    };

    const handleCanPlay = () => {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    };

    const handleLoadStart = () => {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update audio source when current track changes
  useEffect(() => {
    if (state.currentTrack && audioRef.current) {
      audioRef.current.src = state.currentTrack.src;
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      
      // If music should be playing, start playback once the track loads
      if (state.isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to play audio' });
          dispatch({ type: ACTIONS.PAUSE });
        });
      }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentTrack]);

  // Handle play/pause state changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (state.isPlaying) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to play audio' });
        dispatch({ type: ACTIONS.PAUSE });
      });
    } else {
      audioRef.current.pause();
    }
  }, [state.isPlaying]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  // Actions
  const playTrack = (track) => {
    if (track) {
      dispatch({ type: ACTIONS.SET_CURRENT_TRACK, payload: track });
      dispatch({ type: ACTIONS.PLAY });
    }
  };

  const togglePlayPause = () => {
    if (state.isPlaying) {
      dispatch({ type: ACTIONS.PAUSE });
    } else {
      dispatch({ type: ACTIONS.PLAY });
    }
  };

  const handleNext = () => {
    if (!state.currentTrack) return;

    let nextTrack;
    if (state.repeatMode === 'one') {
      nextTrack = state.currentTrack;
      // Restart the song from the beginning
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        dispatch({ type: ACTIONS.SET_CURRENT_TIME, payload: 0 });
      }
    } else {
      const currentIndex = state.playlist.findIndex(track => track.id === state.currentTrack.id);
      if (currentIndex < state.playlist.length - 1) {
        nextTrack = state.playlist[currentIndex + 1];
      } else if (state.repeatMode === 'all') {
        nextTrack = state.playlist[0];
      }
    }

    if (nextTrack) {
      dispatch({ type: ACTIONS.SET_CURRENT_TRACK, payload: nextTrack });
      dispatch({ type: ACTIONS.PLAY });
    } else {
      dispatch({ type: ACTIONS.PAUSE });
    }
  };

  const handlePrevious = () => {
    if (!state.currentTrack) return;

    let prevTrack;
    if (state.repeatMode === 'one') {
      prevTrack = state.currentTrack;
      // Restart the song from the beginning
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        dispatch({ type: ACTIONS.SET_CURRENT_TIME, payload: 0 });
      }
    } else {
      const currentIndex = state.playlist.findIndex(track => track.id === state.currentTrack.id);
      
      if (currentIndex > 0) {
        prevTrack = state.playlist[currentIndex - 1];
      } else if (state.repeatMode === 'all') {
        prevTrack = state.playlist[state.playlist.length - 1];
      }
    }

    if (prevTrack) {
      dispatch({ type: ACTIONS.SET_CURRENT_TRACK, payload: prevTrack });
      dispatch({ type: ACTIONS.PLAY });
    }
  };

  const seekTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      dispatch({ type: ACTIONS.SET_CURRENT_TIME, payload: time });
    }
  };

  const setVolume = (volume) => {
    dispatch({ type: ACTIONS.SET_VOLUME, payload: volume });
  };

  const toggleShuffle = () => {
    dispatch({ type: ACTIONS.TOGGLE_SHUFFLE });
  };

  const toggleRepeat = () => {
    dispatch({ type: ACTIONS.TOGGLE_REPEAT });
  };

  const toggleQueue = () => {
    dispatch({ type: ACTIONS.TOGGLE_QUEUE });
  };

  const value = {
    ...state,
    playTrack,
    togglePlayPause,
    handleNext,
    handlePrevious,
    seekTo,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    toggleQueue
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

// Custom hook
export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};