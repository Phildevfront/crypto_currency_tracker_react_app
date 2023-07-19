function SignupValidation(values) {
	let error = {}
	 //const email_pattern = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
	 //const password_pattern = "//"

	if(values.name === "") {
		error.name =  "Name should not be empty"
	}
	else {
		error.name = ""
	}

	if(values.email === "") {
		error.email =  "Name should not be empty"
	}
	 else {
		error.email = ""
	}

	if(values.password === "") {
		error.password = "Password should not be empty"
	}
	 else {
		error.password = ""
	}
	return error
}

export default SignupValidation;