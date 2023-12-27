import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBg from "./main-header-bg";
import { NavLink } from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBg />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="The logo" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Brows Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
