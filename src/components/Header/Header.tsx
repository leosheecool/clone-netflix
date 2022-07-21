import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        }
        className={styles.logo}
        alt="Netflix"
      />
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Series</Link>
      </nav>
      <SearchBar />
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        }
        className={styles.avatar}
        alt="account"
      />
      <div></div>
    </div>
  );
};

export default Header;
