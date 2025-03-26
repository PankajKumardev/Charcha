import NextAuth from "next-auth/next";
import { authOption } from "./options";

const nextAuth = NextAuth(authOption);

export {nextAuth as GET , nextAuth as POST};