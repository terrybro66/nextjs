import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Navbar.module.css";

import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <img
          src="/guerilla.jpg"
          className={
            router.pathname == "/tasks" || router.pathname == "/projects"
              ? `${styles.logo} ${styles.logoactive}`
              : styles.logo
          }
          alt="Click here to add Task"
        />
      </div>
      <div className={styles.icon}>
        <FaLinkedin />
      </div>
      <div className={styles.icon}>
        <FaFacebook />
      </div>
      <div className={styles.icon}>
        <FaGithub />
      </div>
      <div className={styles.pages}></div>
      <div className={styles.pagelinks}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.pagelinks}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
      <div className={styles.pagelinks}>
        <Link href="/tasks">
          <a>Tasks</a>
        </Link>
      </div>
      <div className={styles.pagelinks}>
        <Link href="/stats">
          <a>Stats</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
