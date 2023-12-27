"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

export const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
};
