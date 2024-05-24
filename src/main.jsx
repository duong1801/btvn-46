/** @format */

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-camw2msxs5buo2dw.us.auth0.com"
			clientId="a2ujv4c2q11GKnCkUkFohOYtLMu9c3dU"
			redirectUri={window.location.origin}>
			<App />
		</Auth0Provider>
	</React.StrictMode>
)
