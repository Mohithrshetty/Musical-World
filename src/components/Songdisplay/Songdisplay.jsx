

// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Songdisplay.css'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';


// function SongDisplay() {
//   const [songs, setSongs] = useState([]);
//   const [user, setUser] = useState({ id: 1 }); 

//   useEffect(() => {
//     async function fetchSongs() {
//       try {
//         const response = await axios.get('http://localhost:3000/songs');
//         setSongs(response.data);
//       } catch (error) {
//         console.error('Failed to fetch songs:', error.message);
//       }
//     }
//     fetchSongs();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/songs/${id}`);
//       setSongs(prevSongs => prevSongs.filter(song => song.id !== id));
//     } catch (error) {
//       console.error('Failed to delete song:', error.message);
//     }
//   };
  
  

  

//   const addToFavorites = async (songId, songTitle, thumbnail, musicFile) => {
//     try {
//       await axios.post('http://localhost:3000/favorite_songs', { user_id: user.id, song_id: songId, song_title: songTitle, thumbnail: thumbnail, music_file: musicFile });
//       alert('Added to Favorites');
//     } catch (error) {
//       alert('Failed to add to Favorites');
//     }
//   };
  
  

  
  
//   return (
//     <div className='hello' >
//       <button className='upload' onClick={() => { window.location.href = '/upload'; }}>
//   <FontAwesomeIcon icon={faUpload}/> Upload Songs
// </button>
//       <h1>Songs</h1>
     
//       <div className='song-list'>
//         {songs.map((song) => (
//           <div key={song.id} className="song">
//             <h2>{song.song_title}</h2>
//             <p>{song.description}</p>
//             <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
//             <audio controls >
//               <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mp3" />
//               Your browser does not support the audio element.
//             </audio>
//            <div className='buttons'>
//            {/* <button onClick={() => addToFavorites(song.id)}>Add to Favorites</button> */}
//            <button onClick={() => addToFavorites(song.id,song.song_title, song.thumbnail, song.music_file)}>
//   <FontAwesomeIcon icon={faHeart} /> Add to Favorites
// </button>
// <button onClick={() => handleDelete(song.id)}>
//   <FontAwesomeIcon icon={faTrash} /> Delete
// </button>
            
           
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SongDisplay;

// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Songdisplay.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// function SongDisplay() {
//   const [songs, setSongs] = useState([]);
//   const [user, setUser] = useState({ id: 1 });

//   useEffect(() => {
//     async function fetchSongs() {
//       try {
//         const response = await axios.get('http://localhost:3000/songs');
//         setSongs(response.data);
//       } catch (error) {
//         console.error('Failed to fetch songs:', error.message);
//       }
//     }
//     fetchSongs();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/songs/${id}`);
//       setSongs(prevSongs => prevSongs.filter(song => song.id !== id));
//     } catch (error) {
//       console.error('Failed to delete song:', error.message);
//     }
//   };

//   const addToFavorites = async (songId, songTitle, thumbnail, musicFile) => {
//     try {
//       await axios.post('http://localhost:3000/favorite_songs', { user_id: user.id, song_id: songId, song_title: songTitle, thumbnail: thumbnail, music_file: musicFile });
//       alert('Added to Favorites');
//     } catch (error) {
//       alert('Failed to add to Favorites');
//     }
//   };



//   const handleRate = async (songId, rating) => {
//     try {
//       // Send a request to your backend to save the rating for the song
//       alert(`Rated song ${songId} with ${rating} stars`);
//     } catch (error) {
//       console.error('Failed to rate song:', error.message);
//     }
//   };

//   return (
//     <div className='hello' style={{background: 'linear-gradient(145deg, #f6d365, #fda085)' , padding: '10px', margin: '10'}}>
//       <button className='upload' onClick={() => { window.location.href = '/upload'; }}>
//         <FontAwesomeIcon icon={faUpload}/> Upload Songs
//       </button>
//       <h1>Songs</h1>
//       <div className='song-list'>
//         {songs.map((song) => (
//           <div key={song.id} className="song">
//             <h2>{song.song_title}</h2>
//             <p>{song.description}</p>
//             <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
//             <audio controls >
//               <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mp3" />
//               Your browser does not support the audio element.
//             </audio>
//             <div className='buttons'>
//               <button onClick={() => addToFavorites(song.id,song.song_title, song.thumbnail, song.music_file)}>
//                 <FontAwesomeIcon icon={faHeart} /> Add to Favorites
//               </button>
//               <button onClick={() => handleDelete(song.id)}>
//                 <FontAwesomeIcon icon={faTrash} /> Delete
//               </button>
//               {/* <select onChange={(e) => handleRate(song.id, e.target.value)}>
//                 <option value="">Rate this song</option>
//                 <option value="1">1 star</option>
//                 <option value="2">2 stars</option>
//                 <option value="3">3 stars</option>
//                 <option value="4">4 stars</option>
//                 <option value="5">5 stars</option>
//               </select> */}
//                <div className='stars'>
//               <FontAwesomeIcon
//                 icon={faStar}
//                 color={song.rating >= 1 ? '#ffc107' : '#e4e5e9'}
//                 onClick={() => handleRate(song.id, 1)}
//               />
//               <FontAwesomeIcon
//                 icon={faStar}
//                 color={song.rating >= 2 ? '#ffc107' : '#e4e5e9'}
//                 onClick={() => handleRate(song.id, 2)}
//               />
//               <FontAwesomeIcon
//                 icon={faStar}
//                 color={song.rating >= 3 ? '#ffc107' : '#e4e5e9'}
//                 onClick={() => handleRate(song.id, 3)}
//               />
//               <FontAwesomeIcon
//                 icon={faStar}
//                 color={song.rating >= 4 ? '#ffc107' : '#e4e5e9'}
//                 onClick={() => handleRate(song.id, 4)}
//               />
//               <FontAwesomeIcon
//                 icon={faStar}
//                 color={song.rating >= 5 ? '#ffc107' : '#e4e5e9'}
//                 onClick={() => handleRate(song.id, 5)}
//               />
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SongDisplay;





// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Songdisplay.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faTrash, faUpload, faStar } from '@fortawesome/free-solid-svg-icons';
// import Swal from 'sweetalert2';

// function SongDisplay() {
//   const [songs, setSongs] = useState([]);
//   const [user, setUser] = useState({ id: 1 });

//   useEffect(() => {
//     async function fetchSongs() {
//       try {
//         const response = await axios.get('http://localhost:3000/songs');
//         setSongs(response.data);
//       } catch (error) {
//         console.error('Failed to fetch songs:', error.message);
//       }
//     }
//     fetchSongs();
//   }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/songs/${id}`);
  //     setSongs(prevSongs => prevSongs.filter(song => song.id !== id));
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Song Deleted',
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //   } catch (error) {
  //     console.error('Failed to delete song:', error.message);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Failed to Delete Song',
  //       text: 'An error occurred while deleting the song. Please try again.',
  //       showConfirmButton: false,
  //       timer: 3000
  //     });
  //   }
  // };

//   const addToFavorites = async (songId, songTitle, thumbnail, musicFile) => {
//     try {
//       await axios.post('http://localhost:3000/favorite_songs', { user_id: user.id, song_id: songId, title: songTitle, thumbnail: thumbnail, music_file: musicFile });
//       Swal.fire({
//         icon: 'success',
//         title: 'Added to Favorites',
//         showConfirmButton: false,
//         timer: 1500
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to Add to Favorites',
//         text: 'An error occurred while adding to favorites. Please try again.',
//         showConfirmButton: false,
//         timer: 3000
//       });
//     }
//   };

//   const handleRate = async (songId, rating) => {
//     try {
//       const userId = 2; // Replace 1 with the actual user ID
//       await axios.post('http://localhost:3000/reviews', { song_id: songId, stars: rating, user_id: userId });
//       Swal.fire({
//         icon: 'success',
//         title: 'Thanks for Rating',
//         showConfirmButton: false,
//         timer: 1500
//       });
//     } catch (error) {
//       console.error('Failed to rate song:', error.message);
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to Rate Song',
//         text: 'An error occurred while rating the song. Please try again.',
//         showConfirmButton: false,
//         timer: 3000
//       });
//     }
//   };

//   return (
//     <div className='hello' style={{ background: 'linear-gradient(145deg, #f6d365, #fda085)', padding: '10px', margin: '10' }}>
//       <button className='upload' onClick={() => { window.location.href = '/upload'; }}>
//         <FontAwesomeIcon icon={faUpload} /> Upload Songs
//       </button>
//       <h1>Songs</h1>
//       <div className='song-list'>
//         {songs.map((song) => (
//           <div key={song.id} className="song">
//             <h2>{song.title}</h2>
//             <p>{song.description}</p>
//             <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
//             <audio controls >
//               <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mp3" />
//               Your browser does not support the audio element.
//             </audio>
//             <div className='buttons'>
//               <button onClick={() => addToFavorites(song.id, song.title, song.thumbnail, song.music_file)}>
//                 <FontAwesomeIcon icon={faHeart} /> Add to Favorites
//               </button>
//               <button onClick={() => handleDelete(song.id)}>
//                 <FontAwesomeIcon icon={faTrash} /> Delete
//               </button>
//               <div className='stars'>
//                 {[1, 2, 3, 4, 5].map((index) => (
//                   <FontAwesomeIcon
//                     key={index}
//                     icon={faStar}
//                     color={song.rating >= index ? '#ffc107' : '#e4e5e9'}
//                     onClick={() => handleRate(song.id, index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SongDisplay;



import { useState, useEffect } from 'react';
import axios from 'axios';
import './Songdisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash, faUpload, faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode to decode the token

function SongDisplay() {
  const [songs, setSongs] = useState([]);
  const [userId, setUserId] = useState(null); // State to store the user ID

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await axios.get('http://localhost:3000/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Failed to fetch songs:', error.message);
      }
    }
    fetchSongs();

    // Fetch user ID from token
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const { id } = decoded.user;
      setUserId(id);
    }
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/songs/${id}`);
  //     setSongs(prevSongs => prevSongs.filter(song => song.id !== id));
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Song Deleted',
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //   } catch (error) {
  //     console.error('Failed to delete song:', error.message);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Failed to Delete Song',
  //       text: 'An error occurred while deleting the song. Please try again.',
  //       showConfirmButton: false,
  //       timer: 3000
  //     });
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      // Display "Contact Admin" message
      Swal.fire({
        icon: 'info',
        title: 'Contact Admin',
        text: 'Please contact the admin to delete songs.',
        showConfirmButton: false,
        timer: 3000
      });
    } catch (error) {
      console.error('Failed to delete song:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Delete Song',
        text: 'An error occurred while deleting the song. Please try again.',
        showConfirmButton: false,
        timer: 3000
      });
    }
  };
  

  const addToFavorites = async (songId, songTitle, thumbnail, musicFile) => {
    try {
      await axios.post('http://localhost:3000/favorite_songs', { user_id: userId, song_id: songId, title: songTitle, thumbnail: thumbnail, music_file: musicFile });
      Swal.fire({
        icon: 'success',
        title: 'Added to Favorites',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to Add to Favorites',
        text: 'An error occurred while adding to favorites. Please try again.',
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  const handleRate = async (songId, rating) => {
    try {
      await axios.post('http://localhost:3000/reviews', { song_id: songId, stars: rating, user_id: userId });
      Swal.fire({
        icon: 'success',
        title: 'Thanks for Rating',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Failed to rate song:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Rate Song',
        text: 'An error occurred while rating the song. Please try again.',
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  return (
    <div className='hello' style={{ background: 'linear-gradient(145deg, #f6d365, #fda085)', padding: '10px', margin: '10' }}>
      <button className='upload' onClick={() => { window.location.href = '/upload'; }}>
        <FontAwesomeIcon icon={faUpload} /> Upload Songs
      </button>
      <h1>Songs</h1>
      <div className='song-list'>
        {songs.map((song) => (
          <div key={song.id} className="song">
            <h2>{song.title}</h2>
            <p>{song.description}</p>
            <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
            <audio controls >
              <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <div className='buttons'>
              <button onClick={() => addToFavorites(song.id, song.title, song.thumbnail, song.music_file)}>
                <FontAwesomeIcon icon={faHeart} /> Add to Favorites
              </button>
              <button onClick={() => handleDelete(song.id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
              <div className='stars'>
                {[1, 2, 3, 4, 5].map((index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    color={song.rating >= index ? '#ffc107' : '#e4e5e9'}
                    onClick={() => handleRate(song.id, index)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongDisplay;
