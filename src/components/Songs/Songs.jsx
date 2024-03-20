



// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Songs.css';
// import { jwtDecode } from 'jwt-decode';

// function SongList() {
//   const [musicFile, setMusicFile] = useState(null);
//   const [thumbnailFile, setThumbnailFile] = useState(null);
//   const [songTitle, setSongTitle] = useState('');
//   const [description, setSongDescription] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [userId, setUserId] = useState(null); // State to store the user ID

//   useEffect(() => {
//     // Fetch user ID from token
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decoded = jwtDecode(token);
//       const { id } = decoded.user;
//       setUserId(id);
//     }
//   }, []);

//   const handleMusicFileChange = (event) => {
//     setMusicFile(event.target.files[0]);
//   };

//   const handleThumbnailFileChange = (event) => {
//     setThumbnailFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!musicFile || !thumbnailFile || !songTitle || !description || !categoryId || !userId) {
//       alert('Please provide all the required information');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', musicFile);
//     formData.append('thumbnail', thumbnailFile);
//     formData.append('title', songTitle);
//     formData.append('description', description);
//     formData.append('category_id', categoryId);
//     formData.append('user_id', userId);

//     try {
//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert(response.data.message);
//     } catch (error) {
//       alert('Failed to upload song');
//     }
//   };

//   return (
//     <div className='add-song-form'>
//       <h1>Upload Songs</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" name="file" onChange={handleMusicFileChange} required />
      
//         <input type='text' placeholder='Enter Song Title' value={songTitle} onChange={(e) => setSongTitle(e.target.value)} required />
//         <input type='text' placeholder='Enter Song Description' value={description} onChange={(e) => setSongDescription(e.target.value)} required />

//         <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
//         <option value="">Select Song Category</option>
//         <option value="10">Classical</option>
//         <option value="20">Movie</option>
//         </select>
//         <input type='text' placeholder='Enter User ID' value={userId || ''} disabled />
//         <h2>Add Thumbnail</h2>
//         <input type="file" name="thumbnail" onChange={handleThumbnailFileChange} required />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default SongList;


import { useState, useEffect } from 'react';
import axios from 'axios';
import './Songs.css';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SongList() {
  const [musicFile, setMusicFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [songTitle, setSongTitle] = useState('');
  const [description, setSongDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [userId, setUserId] = useState(null); // State to store the user ID

  useEffect(() => {
    // Fetch user ID from token
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const { id } = decoded.user;
      setUserId(id);
    }
  }, []);

  const handleMusicFileChange = (event) => {
    setMusicFile(event.target.files[0]);
  };

  const handleThumbnailFileChange = (event) => {
    setThumbnailFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!musicFile || !thumbnailFile || !songTitle || !description || !categoryId || !userId) {
      alert('Please provide all the required information');
      return;
    }

    const formData = new FormData();
    formData.append('file', musicFile);
    formData.append('thumbnail', thumbnailFile);
    formData.append('title', songTitle);
    formData.append('description', description);
    formData.append('category_id', categoryId);
    formData.append('user_id', userId);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(response.data.message) ;
    } catch (error) {
      toast.error('Failed to upload song');
    }
  };

  return (
    <div className='add-song-form'>
      <h1>Upload Songs</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleMusicFileChange} required />
        <input type='text' placeholder='Enter Song Title' value={songTitle} onChange={(e) => setSongTitle(e.target.value)} required />
        <input type='text' placeholder='Enter Song Description' value={description} onChange={(e) => setSongDescription(e.target.value)} required />
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
          <option value="">Select Song Category</option>
          <option value="10">Classical</option>
          <option value="20">Movie</option>
        </select>
        <input type='text' placeholder='Enter User ID' value={userId || ''} disabled />
        <h2>Add Thumbnail</h2>
        <input type="file" name="thumbnail" onChange={handleThumbnailFileChange} required />
        <button type="submit">Upload</button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default SongList;
