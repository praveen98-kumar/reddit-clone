import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-6 text-center">
        <h1 className="text-5xl text-font-bold">
          Welcome to{" "}
          <a href="https://nextjs.org" className="text-blue-500">
            Next.js!
          </a>
        </h1>
        <div>
          {session && (
            <p>
              Signed in as:{" "}
              <span className="font-bold text-blue-300">
                {session.user.name}
              </span>
            </p>
          )}
          <div>
            {!session ? (
              <button
                onClick={() => signIn()}
                className="px-3 py-1 ml-2 rounded-lg text-white bg-blue-400 hover:bg-blue-500 focus:outline-none"
              >
                Sign In
              </button>
            ) : (
              <>
                <button
                  onClick={() => signOut()}
                  className="px-3 py-1 ml-2 rounded-lg text-white bg-red-500 hover:bg-red-700 focus:outline-none"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
}
