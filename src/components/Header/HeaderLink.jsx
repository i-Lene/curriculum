import { NavLink } from "react-router";

export default function HeaderLink({ path, name, icon }) {
  return (
    <NavLink
      to={path}
      className="header-link"
      style={({ isActive }) => ({
        color: isActive ? "pink" : "red",
      })}
    >
      <span className="icon">{icon}</span>
      {name}
    </NavLink>
  );
}
