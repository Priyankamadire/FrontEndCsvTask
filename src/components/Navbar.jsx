import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Assignment</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navLink}>
          <NavLink to="/" style={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li style={styles.navLink}>
          <NavLink to="/about" style={styles.navLink}>
            About
          </NavLink>
        </li>
        <li style={styles.navLink}>
          <NavLink to="/uploadData" style={styles.navLink}>
            File Upload
          </NavLink>
        </li>
        <li style={styles.navLink}>
          <NavLink to="/getdetail" style={styles.navLink}>
            Details
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  navLinks: {
    textDecoration: "none",
    color: "azure",
    listStyle: "none",
    display: "flex",
  },
  navLink: {
    margin: "0 1rem",
    cursor: "pointer",
    textDecoration: "none",
    color: "azure",
  },
};

export default Navbar;
