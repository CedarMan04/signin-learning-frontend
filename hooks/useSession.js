import { useSession as useNextAuthSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react"

const useSession = () => {
  const { data: session, status } = useNextAuthSession()

  useEffect(() => {
    if(status === "unauthenticated"){
      signIn("auth0")
    }
  }, [status])

  return {session, status}
}

export default useSession