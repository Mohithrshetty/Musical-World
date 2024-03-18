


import { useState, useEffect } from 'react';
import axios from 'axios';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import './Favourites.css';
import { jwtDecode } from 'jwt-decode';

function Favorites() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.user.id;

  useEffect(() => {
    async function fetchFavoriteSongs() {
      try {
        const response = await axios.get(`http://localhost:3000/favorite_songs/${userId}`);
        setFavoriteSongs(response.data);
      } catch (error) {
        console.error('Failed to fetch favorite songs:', error.message);
      }
    }
    fetchFavoriteSongs();
  }, [userId]);

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/favorite_songs/${id}`);
      // Update the favorite songs list after removal
      setFavoriteSongs(favoriteSongs.filter((song) => song.id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Removed from Favorites',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Failed to remove from favorites:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Remove',
        text: 'An error occurred while removing from favorites. Please try again.',
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  return (
    <div className='fav' style={{background: 'linear-gradient(145deg, #f6d365, #fda085)' , padding: '25px', marginBlockEnd: '0px'}}>
      <h1>Your Favorite Songs</h1>
      <div className="fav-list">
        {favoriteSongs.map((song) => (
          <div key={song.id} className="song">
            <h2>{song.title}</h2>
            <p>{song.description}</p>
            <img src={`http://localhost:3000/uploads/images/${song.thumbnail}`} alt="Thumbnail" />
            <audio controls>
              <source src={`http://localhost:3000/uploads/musics/${song.music_file}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <button onClick={() => removeFromFavorites(song.id)}>
              <FontAwesomeIcon icon={faTrash} /> REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Favorites;
