import { NavLink } from "react-router";
import classes from "./Header.module.scss";

export default function HeaderLink({ path, name, icon }) {
  return (
    <NavLink
      to={path}
      className={classes.headerLink}
      style={({ isActive }) => ({
        color: isActive ? "pink" : "red",
      })}
    >
      {icon && <span className="icon">{icon}</span>}
      {name}
    </NavLink>
  );
}
