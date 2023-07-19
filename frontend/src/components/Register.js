import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

	const [values, setValues] = useState({
		id: "",
		name: "",
		email: "",
		password: "",
	})

	const navigate = useNavigate();
	const [errors, setErrors] = useState({})

	// const handleInput = (event) => {
	// 	setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
	// }
	const handleSubmit =(event) => {
		event.preventDefault();
		setErrors(Validation(values));
		if(errors.name === "" && errors.email === "" && errors.password === "") {
			axios.post('http://localhost:8889/signup', values)
			.then(res => {
				navigate('/login');
			})
			.catch(err => console.log(err));
			}
	}

	console.log(values, "values");

  return (
	<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
		<div className='bg-white p-3 rounded w-25'>
			<h2>Sign-Up-Register</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor="name" ><strong>Name</strong></label>
					<input type="text" placeholder='Enter name' name='name'
					 onChange={e => setValues({...values, name: e.target.value})} className='form-control rounded-0'/>
					{errors.name && <span className='text-danger'>{errors.name}</span>}
				</div>
				<div className='mb-3'>
					<label htmlFor="email" ><strong>Email</strong></label>
					<input type="email" placeholder='Enter Email' name='email'
					 onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
					{errors.email && <span className='text-danger'>{errors.email}</span>}
				</div>
				<div className='mb-3'>
					<label htmlFor="password"><strong>Password</strong></label>
					<input type="password" placeholder='new-password' name='password'
					 onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0'/>
					{errors.password && <span className='text-danger'>{errors.password}</span>}
				</div>
				<button type="submit" className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
				<p>Your agree to our terms...</p>
				<Link to="/login" className='btn btn-default border w-100 bg-ligth rounded-0 text-decoration-none'>Login</Link>
			</form>
		</div>
	</div>
  )
}

export default Register