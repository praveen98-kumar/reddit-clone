import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-5xl text-font-bold">
          Welcome to <a href="https://nextjs.org" className="text-blue-500">Next.js!</a>
        </h1>

        <p>
          Get started by editing{" "}
          <code className="text-red-500">pages/index.js</code>
        </p>

        <div></div>
      </main>
    </div>
  );
}
