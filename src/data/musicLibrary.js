// Music Library - All songs from /public/songs/
// The music player is independent of portfolio sections

export const musicLibrary = [
  {
    id: 1,
    title: 'Small Talk',
    artist: 'Briston Maroney',
    album: 'Sunflower',
    duration: '3:44',
    src: '/songs/Briston Maroney - Small Talk [Official Music Video].mp3',
    cover: '/images/smalltalk.jpeg'
  },
  {
    id: 2,
    title: 'CHANCES', 
    artist: 'KAYTRANADA, Shay Lia',
    album: 'BUBBA',
    duration: '4:12',
    src: '/songs/KAYTRANADA, Shay Lia - CHANCES (Audio).mp3',
    cover: '/images/chances.jpg'
  },
  {
    id: 3,
    title: 'New N3on',
    artist: 'Playboi Carti',
    album: 'Whole Lotta Red',
    duration: '2:58',
    src: '/songs/Playboi Carti - New N3on (Official Audio).mp3',
    cover: '/images/newn3on.png'
  },
  {
    id: 4,
    title: 'End of Beginning',
    artist: 'Djo',
    album: 'Decide',
    duration: '2:41',
    src: '/songs/Djo - End of Beginning (Official Lyric Video).mp3',
    cover: '/images/endofbeginning.png'
  },
  {
    id: 5,
    title: 'Ribs',
    artist: 'Lourde',
    album: 'Pure Heroine',
    duration: '4:19',
    src: '/songs/Ribs.mp3',
    cover: '/images/ribs.jpeg'
  },
  {
    id: 6,
    title: 'Television / So Far So Good',
    artist: 'Rex Orange County',
    album: 'Apricot Princess',
    duration: '4:22',
    src: '/songs/Rex Orange County - Television  So Far So Good (Official Audio).mp3',
    cover: '/images/sofarsogood.jpg'
  },
  {
    id: 7,
    title: 'Oklahoma Smokeshow',
    artist: 'Zach Bryan',
    album: 'Apricot Princess',
    duration: '3:32',
    src: '/songs/Zach Bryan - Oklahoma Smokeshow.mp3',
    cover: '/images/oklahoma.jpeg'
  },
  {
    id: 8,
    title: 'Doggy',
    artist: 'Geezer, Kevin Abstract, Dominic Fike',
    album: 'Blush',
    duration: '2:52',
    src: '/songs/Doggy.mp3',
    cover: '/images/doggy.png'
  }
];

// Utility functions
export const getAllTracks = () => musicLibrary;

export const getTrackById = (id) => {
  return musicLibrary.find(track => track.id === id);
};

export const getNextTrack = (currentId) => {
  const currentIndex = musicLibrary.findIndex(track => track.id === currentId);
  return currentIndex < musicLibrary.length - 1 ? musicLibrary[currentIndex + 1] : musicLibrary[0];
};

export const getPreviousTrack = (currentId) => {
  const currentIndex = musicLibrary.findIndex(track => track.id === currentId);
  return currentIndex > 0 ? musicLibrary[currentIndex - 1] : musicLibrary[musicLibrary.length - 1];
};

export const shufflePlaylist = (playlist) => {
  const shuffled = [...playlist];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};