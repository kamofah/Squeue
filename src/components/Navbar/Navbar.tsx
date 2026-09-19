import { HugeiconsIcon } from "@hugeicons/react";
import { Hamburger } from "@hugeicons/core-free-icons";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>
        Squeue
        <span className={styles.logoDot}>.</span>
      </p>
      <HugeiconsIcon icon={Hamburger} />
    </nav>
  );
};

export default Navbar;
