// Navbar.js
import { Link, NavLink } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  siteTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
  },
  linkList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    marginLeft: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  activeLink: {
    color: "#ffc107",
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.siteTitle}>
        WQM
      </Link>
      <ul style={styles.linkList}>
        <li style={styles.listItem}>
          <NavLink to="/Complaint" style={styles.link} activeStyle={styles.activeLink}>
            Raise Complaint
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/StayAware" style={styles.link} activeStyle={styles.activeLink}>
            Stay Aware
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/About" style={styles.link} activeStyle={styles.activeLink}>
            About
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/Login" style={styles.link} activeStyle={styles.activeLink}>
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
