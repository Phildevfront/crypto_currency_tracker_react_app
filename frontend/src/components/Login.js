import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from'./LoginValidation'
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css'


const Login = () => {

  const [values, setValues] = useState({
		email: "",
		password: "",
	})

  const navigate = useNavigate();
	const [errors, setErrors] = useState({})

  const handleSubmit =(event) => {
		event.preventDefault();
		setErrors(Validation(values));
		if(errors.email === "" && errors.password === "") {
			axios.post('http://localhost:8889/', values)
			.then(res => {
				if(res.data === "Success") {
					navigate('/hero');
				} else {
					alert("No record existed");
				}
			})
			.catch(err => console.log(err));
		}
	}

  console.log(values, "values");

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
		<div className='bg-white p-3 rounded w-25'>
		<h2>Sign-In-Login</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor="email" ><strong>Email</strong></label>
					<input type="email" placeholder='Enter Email' name="email"
					  onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
					{errors.email && <span className='text-danger'>{errors.email}</span>}
				</div>
				<div className='mb-3'>
					<label htmlFor="password"><strong>Password</strong></label>
					<input type="password" placeholder='new-password' name="password"
					 onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0'/>
					{errors.password && <span className='text-danger'>{errors.password}</span>}
				</div>
				<button type="submit" className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
				<p>Your agree to our terms...</p>
				<Link to="/register" className='btn btn-default border w-100 bg-ligth rounded-0 text-decoration-none'>Create Account</Link>
			</form>
		</div>
	</div>
  )
}

export default Login