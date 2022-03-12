import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

export const LoginScreen = () => {
	const { dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleLogin = () => {
		const action = {
			type: '[auth] Login',
			payload: {
				name: 'Alexis'
			}
		}

		dispatch(action)
		
		navigate('/marvel', {
			replace: true
		});
	};

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />

			<button
				className="btn btn-primary"
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
};
