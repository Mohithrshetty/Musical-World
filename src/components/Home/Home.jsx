



import './Home.css';
import { jwtDecode } from 'jwt-decode';


function Home() {
  const token = localStorage.getItem('token');
  let welcomeMsg = '';

  if (token) {
    const decoded = jwtDecode(token);
    const { id, first_name } = decoded.user;
    welcomeMsg = `Welcome, ${first_name}!`;
  }

  return (
    <div className="home-main">
     
      {token ? <p className='welcome'>{welcomeMsg}</p> : null}
   

     <img className="home-img" src="home2.webp"/>

    <div className="home">
    <div className="content">
    <h1>THE BEST</h1>
    <br />
    <h2>MUSIC STUDIO EVER...!!</h2>
    <br />
    <p>
      “He took his pain and turned it into something beautiful. Into
      something that people connect to. And thats what good music does.
      It speaks to you. It changes you.” ― Hannah Harrington, Saving June
    </p>
    <br /><br />
    </div>
 
  </div>
  </div>
  
  );
}

export default Home;
