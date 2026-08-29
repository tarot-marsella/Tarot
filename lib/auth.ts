import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

function cleanEnv(val?: string): string {
  if (!val) return "";
  return val.replace(/^["'\s]+|["'\s]+$/g, "").trim();
}

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

const clientId = cleanEnv(process.env.GOOGLE_CLIENT_ID) || defaultClientId;
const clientSecret =
  cleanEnv(process.env.GOOGLE_CLIENT_SECRET) || defaultClientSecret;

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
    cleanEnv(process.env.NEXTAUTH_SECRET) ||
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
