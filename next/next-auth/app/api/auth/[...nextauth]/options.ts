import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-cool-password",
        },
      },
      async authorize(credentials) {
        const user = { id: 42, name: "Dave", password: "123456" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user as any;
        }

        return null;
      },
    }),
  ],
};
