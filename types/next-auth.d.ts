import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { decl } from "postcss";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: number;
    name: string;
    username: string;
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}
