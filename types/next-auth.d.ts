// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      image?: string;
      // other properties you want to include
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    sub: string;
    // other properties you want to include
  }
}

declare module "next-auth" {
  interface User {
    role: string;
    // other properties you want to include
  }
}