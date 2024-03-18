

// import './Login.css'
// import  { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Validation from '../validation/Loginvalidation'; 
// import axios from 'axios';

// function Login() {
//   const [values, setValues] = useState({
//         email_address:'',
//         password:''

// });

// const navigate = useNavigate();
// const [errors, setErrors] = useState({

// })

//   const handleInput = (event) =>{
//     setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
//   }

//   const handleSubmit =  (event) => {
//     event.preventDefault();
   
//     setErrors(Validation(values));

//     if (errors.email_address==="" && errors.password==="") {
//       axios
//         .post('http://localhost:3000/login', values)
//         .then(res => {
//           if(res.data === "Login Success"){
//             navigate('/Home')
//           }else{
//             alert("No record Exist")
//           }
//         })
//         .catch(err=>console.log(err));

//         }
       

      
//   }



//   return (
//     <div className='login-form'>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           name='email_address'
          
//           onChange={handleInput} 

//         />

//         {errors.email_address && <span>{errors.email_address}</span>}
//         <input
//           type="password"
//           placeholder="Password"
//           name='password'
//           onChange={handleInput}
//         />

// {errors.password && <span>{errors.password}</span>}
//         <button type="submit">Login</button>
//       </form>
//       <Link to="/Signup">Dont have an account? </Link>
//     </div>
//   );
// }

// export default Login;


// import './Login.css';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Validation from '../validation/Loginvalidation'; 
// import axios from 'axios';

// function Login() {
//   const [values, setValues] = useState({
//     email_address:'',
//     password:''
//   });

//   const navigate = useNavigate();

//   axios.defaults.withCredentials=true;
//   const [errors, setErrors] = useState({});

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setValues({
//       ...values,
//       [name]: value
//     });
//   };




//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     setErrors(Validation(values));
  
//     if (!errors.email_address && !errors.password) {
//       try {
//         const res = await axios.post('http://localhost:3000/login', values);
//         if (res.data.Status === "Success") {
//           navigate('/');
//         } else {
//           alert(res.data.Error);
//         }
//       } catch (error) {
//         console.error('Failed to log in:', error.message);
//         alert("Email or Password is incorrect");
//       }
//     }
//   };
  

//   return (
//     <div className='login-form'>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           name='email_address'
//           value={values.email_address}
//           onChange={handleInput}
//         />
//         {errors.email_address && <span>{errors.email_address}</span>}
//         <input
//           type="password"
//           placeholder="Password"
//           name='password'
//           value={values.password}
//           onChange={handleInput}
//         />
//         {errors.password && <span>{errors.password}</span>}
//         <button type="submit">Login</button>
//       </form>
//       <Link to="/Signup">Dont have an account?</Link>
//     </div>
//   );
// }

// export default Login;


import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email_address: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', values);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token to local storage
        navigate('/'); // Redirect to home page after successful login
      } else {
        alert("No record found"); // Display a more descriptive message
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); // Display the specific error message if available
      } else {
        alert('Internal Server Error'); // Display a generic error message
      }
    }
  }

  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name='email_address'
          value={values.email_address}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          value={values.password}
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/Signup">Dont have an account? Sign up</Link>
    </div>
  );
}

export default Login;
