import Nav from "../Nav";
import styles from "./index.module.css";

function Footer() {
  return (
    <>
      <nav className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__title}>
            <h2>Covid ID</h2>
            <p>Developed by alfatih</p>
          </div>
          <div className={styles.footer__nav}>
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

export default Footer;
