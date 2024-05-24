/** @format */

import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
function App() {
	const {
		loginWithRedirect,
		user,
		isAuthenticated,
		getAccessTokenSilently,
		logout,
	} = useAuth0()
	const [userMetadata, setUserMetadata] = useState(null)
	useEffect(() => {
		const getUserMetadata = async () => {
			const domain = "dev-camw2msxs5buo2dw.us.auth0.com"
			console.log("object")
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: `https://${domain}/api/v2/`,
						scope: "read:current_user",
					},
				})

				const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

				const metadataResponse = await fetch(userDetailsByIdUrl, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})

				const { user_metadata } = await metadataResponse.json()
				console.log(user_metadata)
				setUserMetadata(user_metadata)
			} catch (e) {
				console.log(e.message)
			}
		}

		getUserMetadata()
	}, [getAccessTokenSilently, user])

	return (
		<>
			{isAuthenticated || (
				<button onClick={() => loginWithRedirect()}>Log In</button>
			)}
			{isAuthenticated && (
				<div>
					<img src={user?.picture} alt={user?.name} />
					<h2>{user?.name}</h2>
					<p>{user?.email}</p>
					<p>{user.sub}</p>
					<h3>User Metadata</h3>
					{userMetadata ? (
						<pre>{JSON.stringify(userMetadata, null, 2)}</pre>
					) : (
						"No user metadata defined"
					)}
					<button onClick={() => logout({ returnTo: window.location.origin })}>
						Log Out
					</button>
				</div>
			)}
		</>
	)
}

export default App
