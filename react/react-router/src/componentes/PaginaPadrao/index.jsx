import { Outlet } from "react-router-dom"
import Banner from "../Banner"

const PaginaPadrao = () => {
	return (
		<main>
			<Banner />

			<Outlet />
		</main>
	)
}

export default PaginaPadrao