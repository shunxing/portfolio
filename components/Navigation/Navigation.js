import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <div className={styles.navigation}>
    <Link href="/"> Home</Link>
    <Link href="/experiences">Experiences</Link>
    <Link href="/projects"> Projects</Link>
    <Link href="/other"> Other</Link>
  </div>
);

export default Navigation;
