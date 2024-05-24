/** @format */

import { createContext } from "react"
export const ProviderContext = createContext()
function Provider({ children }) {
	return <ProviderContext>{children}</ProviderContext>
}

export default Provider
