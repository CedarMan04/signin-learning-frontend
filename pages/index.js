import React from "react";
import { signIn, signOut } from "next-auth/react";
import useSession from "../hooks/useSession";

export default function Home() {
  const { session, status } = useSession();
  console.log(status)

  return (
    <>
      <div>{session ? "ログインなう" : "ログインしてないよ"}</div>
      <button onClick={() => {
        signIn("auth0")
      }}>ログイン</button>
      <button onClick={() => {
        signOut()
      }}>ログアウト</button>
    </>
  );
}
