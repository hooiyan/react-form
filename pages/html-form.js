import React from 'react'
import styles from '../styles/HTMLForm.module.css'

function HTMLForm() {
  return (
    <form
      action="http://localhost:3000/api/login"
      method="post"
      className={styles.form}
    >
      <label for="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="John Doe"
        className={styles.input}
      />
      <br />
      <label for="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Your password"
        className={styles.input}
      />
      <br />

      <div className={styles.btnGrp}>
        <input
          type="submit"
          value="Log in"
        />
        <br />
        <button type="reset">Reset</button>
      </div>
    </form>
  )
}

export default HTMLForm
