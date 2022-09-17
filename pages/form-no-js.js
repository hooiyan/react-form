import styles from '@/styles/NoJSForm.module.css'

function NoJSFormPage() {
  return (
    <form
      action="http://localhost:3000/api/login"
      method="post"
      className={styles.form}
    >
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="John Doe"
        className={styles.input}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="******"
        className={styles.input}
      />
      <br />

      <div className={styles.btnGrp}>
        <input
          type="submit"
          value="Log in"
          className={styles.input}
        />
        <br />
        <button
          type="reset"
          className={styles.input}
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default NoJSFormPage
