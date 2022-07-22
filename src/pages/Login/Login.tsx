import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input className={styles.input} type="text" placeholder="Username" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
