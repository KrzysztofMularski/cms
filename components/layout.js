import Head from "next/head";
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>With Cookies</title>
      </Head>

      <Header />

      <main>
        <div className="container">{props.children}</div>
      </main>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          color: #ddd;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
        .container {
          max-width: 42rem;
          margin: 0 auto;
          padding: 2rem 1.25rem;
        }
        input {
          color: black;
        }
      `}</style>
    </>
  );
};

export default Layout;
