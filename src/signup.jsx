import React,{useState} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    Aos.init({
        duration: 1000,
        easing: 'ease-in-sine',
      });

      const navigate = useNavigate();
      const handleClick=()=>{
        navigate(-2);
    }
// validation
const [form, setForm] = useState({
  fullname: '',
  email: '',
  password: '',
  dob: '',
  age: '',
  gender: '',
  address: '',
  mobile: '',
  agree: false,
});
const [errors, setErrors] = useState({});

const validate = () => {
  let tempErrors = {};
  let isValid = true;

  if (!form.fullname) {
    tempErrors["fullname"] = "Fullname is required";
    isValid = false;
  } else if (form.fullname.length < 3) {
    tempErrors["fullname"] = "Fullname should be at least 3 characters long";
    isValid = false;
  }

  if (!form.email) {
    tempErrors["email"] = "Email is required";
    isValid = false;
  } else if (!/^[a-zA-Z0-9._+-]{6,30}@(gmail|yahoo|hotmail)\.(com|org|net)$/.test(form.email)) {
    tempErrors["email"] = "Email is invalid";
    isValid = false;
  }

  if (!form.password) {
    tempErrors["password"] = "Password is required";
    isValid = false;
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(form.password)) {
    tempErrors["password"] = "Password should be at least 6 characters long";
    isValid = false;
  }

  if (!form.dob) {
    tempErrors["dob"] = "Date of Birth is required";
    isValid = false;
  }

  if (!form.age) {
    tempErrors["age"] = "Age is required";
    isValid = false;
  } else if (isNaN(form.age) || form.age < 1 || form.age > 120) {
    tempErrors["age"] = "Age is invalid";
    isValid = false;
  }

  if (!form.gender) {
    tempErrors["gender"] = "Gender is required";
    isValid = false;
  }

  if (!form.address) {
    tempErrors["address"] = "Address is required";
    isValid = false;
  }

  if (!form.mobile) {
    tempErrors["mobile"] = "Mobile number is required";
    isValid = false;
  } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
    tempErrors["mobile"] = "Mobile number is invalid";
    isValid = false;
  }

  if (!form.agree) {
    tempErrors["agree"] = "You must agree to the terms and conditions";
    isValid = false;
  }

  setErrors(tempErrors);
  return isValid;
};

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm({
    ...form,
    [name]: type === 'checkbox' ? checked : value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    console.log("Form Data:", form);
    // Add form submission logic here
  }
};

  return (
    <div>
        <div className='signup' data-aos="fade-up">
        <form class="row g-3" onSubmit={handleSubmit}>
            <h4 className='text-center'>Sign up</h4>
           <div class="col-md-12 mb-0">
               <input type="text" class="form-control p-2" id="fullnmae" placeholder='Fullname'  name="fullname"
            value={form.fullname}
            onChange={handleChange} />
                {errors.fullname && <div className="error p-2">{errors.fullname}</div>}
           </div>
           <div class="col-md-12">
             <input type="email" class="form-control p-2" id="email" placeholder='Email' name="email"
            value={form.email}
            onChange={handleChange}/>
             {errors.email && <div className="error p-2">{errors.email}</div>}
           </div>
           <div class="col-12">
             <input type="text" class="form-control" id="inputAddress" placeholder="Password"  name="password"
            value={form.password}
            onChange={handleChange}/>
              {errors.password && <div className="error p-2">{errors.password}</div>}
           </div>
           <div class="col-12">
              <input type="date" class="form-control" id="inputAddress2" placeholder="Date of birth" name="dob"
            value={form.dob}
            onChange={handleChange}/>
              {errors.dob && <div className="error p-2">{errors.dob}</div>}
          </div>
          <div class="col-12">
             <input type="text" class="form-control" id="inputAddress" placeholder="Age" name="age"
            value={form.age}
            onChange={handleChange}/>
            {errors.age && <div className="error p-2">{errors.age}</div>}
           </div>
          <div class="col-md-12">
            <select id="inputState" class="form-select" name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            {errors.gender && <div className="error p-2">{errors.gender}</div>}
          </div>
          <div class="col-12">
             <input type="text" class="form-control" id="inputAddress" placeholder="Address" name="address"
            value={form.address}
            onChange={handleChange}/>
             {errors.address && <div className="error p-2">{errors.address}</div>}
           </div>
           <div class="col-12">
             <input type="text" class="form-control" id="inputAddress" placeholder="Mobile number" name="mobile"
            value={form.mobile}
            onChange={handleChange} onkeypress="return /^[6-9]\d?$/.test(event.key) || (event.target.value.length > 0 && /^\d$/.test(event.key) && event.target.value.length < 10)"/>
            {errors.mobile && <div className="error p-2">{errors.mobile}</div>}
           </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"  name="agree"
              checked={form.agree}
              onChange={handleChange}/>
              <label class="form-check-label" for="gridCheck">
        Check me out
              </label>
              {errors.agree && <div className="error p-2">{errors.agree}</div>}
            </div>
  </div>
          <div class="col-12">
            <button type="submit" class="signup-btn w-100">Sign in</button>
          </div>
          <h6 className='text-center p-2'>Do you have an account <a href='#' onClick={handleClick}>Login</a></h6>
        </form>
        </div>
    </div>
  )
}
