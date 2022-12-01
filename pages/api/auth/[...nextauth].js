import NextAuth from "next-auth";
import auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    auth0Provider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      issuer: process.env.NEXT_PUBLIC_ISSUER,
      authorization: {
        params: {
          display: "page",
          prompt: "login",
        }
      }
    })
  ],
  debug: process.env.NODE_ENV === "development" ? true : false,
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("in jwt");
      console.log(token);
      console.log(user);
      console.log(account);
      console.log(profile);

      return token;
    },
    async session({ session, token, user }) {
      console.log("in session");
      console.log(session);
      console.log(token);
      console.log(user);

      return session;
    },
  },
};
export default NextAuth(authOptions);
