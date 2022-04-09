import styles from "./index.module.css";
import Nav from "../Nav";
import Title from "../Title";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbar__title}>
            <h1>Covid ID</h1>
          </div>
          <div className={styles.navbar__nav}>
            <ul>
              <Nav>Global</Nav>
              <Nav>Indonesia</Nav>
              <Nav>Provinsi</Nav>
              <Nav>About</Nav>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
