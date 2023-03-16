import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <div>
            <ul className="nav">
                <li>
                    <NavLink to="/">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            </ul>
        </div>
    )
}