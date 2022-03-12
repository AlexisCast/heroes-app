import React, { useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
	return JSON.parse(localStorage.getItem('user')) || { logged: false };
	/* return {
		logged: true,
		name: 'Alexis Temporal'
	} */
}
export const HeroesApp = () => {

	const [user, dispatch] = useReducer(authReducer, {}, init)

	return (
		<AuthContext.Provider value={{
			user,
			dispatch
		}}>
			<AppRouter />;
		</AuthContext.Provider>
	)
};
