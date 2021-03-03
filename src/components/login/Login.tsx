import React from "react"
import { Button, Container, Form } from "react-bootstrap"

function Login() {
	const handleLogin = () => {}
	const handleChange = () => {}

	return (
		<Container className='container d-flex flex-column align-items-center justify-content-center fullscreen'>
			<h1 className='mb-4'>Login Form</h1>
			<Form style={{ width: 300 }} onSubmit={handleLogin}>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						name='email'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='d-flex justify-content-center'>
					<Button variant='primary' type='submit'>
						Login
					</Button>
				</Form.Group>
			</Form>
			{/* <Link to='/reset-password'>Forgot Password?</Link>
			<Link className='mt-4' to='/signup'>
				Need an Account? Sign up.
			</Link> */}
		</Container>
	)
}
export default Login
