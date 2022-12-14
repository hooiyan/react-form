import Helmet from '@/components/Helmet'
import styles from '@/styles/NoJSForm.module.css'

function NoJSFormPage() {
  return (
    <>
      <Helmet title="Form without JS" />
      <form
        action="http://localhost:3000/api/form-no-js"
        method="post"
        className={styles.form}
      >
        <label htmlFor="username">Username</label>
        <input
          required
          id="username"
          name="username"
          type="text"
          placeholder="John Doe"
          className={styles.input}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          required
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
    </>
  )
}

export default NoJSFormPage
