import React,  { useState }from 'react'
import loginbg from './assets/login-img.png'
import googleicon from './assets/google (4).png'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Login() {
  
  Aos.init({
    duration: 1000,
    easing: 'ease-in-sine',
  });

  const navigate = useNavigate();
  const handleClick = () => {
        navigate('/Signup');
        
      };

      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors["email"] = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      tempErrors["password"] = "Password is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div>
        <div className='login'>
            <div data-aos="fade-right">
                <img src={loginbg} alt="footbal" width="400px"/>
            </div>
            <div className='login-container' data-aos="fade-left">
                <h3 className='text-center'>Login</h3>
                <form onSubmit={handleSubmit}>
                  <div class="mb-4">
                     <input type="email" class="form-control p-2" placeholder='Email Address' value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                      {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                  <div class="mb-4">
                    <input type="password" class="form-control p-2" placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                    {errors.password && <div className="error">{errors.password}</div>}
                     <a href="#" className='forget-password p-3 float-end'>Forget Password?</a>
                  </div>
                   <button type="submit" class="login-btn w-100 p-2">Login</button>
                   <p className='p-3 text-center mb-0'>or</p>
                   <div className='google-link d-flex gap-3 align-items-center p-2'>
                       <img src={googleicon} alt="google" width="28px" height="24px"/>
                       <a href='#' className='link mb-0'>Login with google</a>
                   </div>
                   <h6 className='text-center m-3'>Don't have an account <a href='#' onClick={handleClick}>Signup</a></h6>
                </form>
            </div>
        </div>
    </div>
  )
}
