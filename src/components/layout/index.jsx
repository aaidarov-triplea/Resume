import { Nav } from "../nav"
import { Outlet } from "react-router-dom"
import { Footer } from "../footer"

export const Layout = () => {
    return (
        <div>
            <Nav />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}