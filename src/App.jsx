/** @format */

import { useAuth0 } from "@auth0/auth0-react"

function App() {
	const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0()

	if (isLoading) {
		return <div>Loading ...</div>
	}
	if (user) {
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	}
	return <button onClick={() => loginWithRedirect()}>Log In</button>
}

export default App
