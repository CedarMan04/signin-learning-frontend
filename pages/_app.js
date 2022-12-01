import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import WithSession from "../components/withSession";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <WithSession>
        <Component {...pageProps} />
      </WithSession>
    </SessionProvider>
  );
}

export default MyApp;
