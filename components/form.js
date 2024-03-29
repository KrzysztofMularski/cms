import Link from "next/link";

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" required />

    {!isLogin && (
      <>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </>
    )}

    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" required />

    {!isLogin && (
      <>
        <label htmlFor="rpassword">Repeat password</label>
        <input type="password" name="rpassword" id="rpassword" required />
      </>
    )}

    <div className="submit">
      {isLogin ? (
        <>
          <Link href="/test/signup" legacyBehavior>
            <a>I don&#39;t have an account</a>
          </Link>
          <button type="submit">Login</button>
        </>
      ) : (
        <>
          <Link href="/test/login" legacyBehavior>
            <a>I already have an account</a>
          </Link>
          <button type="submit">Signup</button>
        </>
      )}
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #333;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
);

export default Form;
