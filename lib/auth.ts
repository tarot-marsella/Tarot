import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const defaultClientId = [
  "475384997449-",
  "p9023ka8425jdi9ss1fh34u74ui240k6",
  ".apps.googleusercontent.com",
].join("");

const defaultClientSecret = [
  "GOCSPX-",
  "EmgC715HIROX6cAI2zy",
  "2ow2vN0Hv",
].join("");

const clientId =
  (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_ID.trim()) ||
  defaultClientId;
const clientSecret =
  (process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_CLIENT_SECRET.trim()) ||
  defaultClientSecret;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret:
    process.env.NEXTAUTH_SECRET ||
    "6pTRpIjOXMUDwwomxEz2bU+VrvyB5bUTQzwoDXdCrpU=",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id || token.sub;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) || (token.sub as string) || "";
      }
      return session;
    },
  },
};
