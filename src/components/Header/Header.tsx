import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import cn from "classnames";

import { ReactComponent as Search } from "assets/icons/search.svg";

const Header = () => {
  const [isBlack, setIsBlack] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsBlack(true);
      } else {
        setIsBlack(false);
      }
    });
  }, []);

  return (
    <div className={cn(styles.container, { [styles.black]: isBlack })}>
      <div className={styles.section}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          }
          className={styles.logo}
          alt="Netflix"
        />
        <nav>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/" className={styles.link}>
            Movies
          </Link>
          <Link to="/" className={styles.link}>
            Series
          </Link>
        </nav>
      </div>
      <div className={styles.section}>
        <Search className={styles.searchIcon} />
        {/* <SearchBar /> */}
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }
          className={styles.avatar}
          alt="account"
        />
      </div>
    </div>
  );
};

export default Header;
