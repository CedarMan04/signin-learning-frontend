import { signOut } from "next-auth/react";
import React from "react";
import useSession from "../hooks/useSession";

export default function WithSession ({children}) {
  const { status } = useSession()
  if(status === "unauthenticated"){
    return <></>;
  }
  return children
}