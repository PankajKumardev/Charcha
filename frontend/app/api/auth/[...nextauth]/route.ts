import NextAuth from "next-auth";
import { authOption } from "./options";

const nextAuth = NextAuth(authOption);

export {nextAuth as GET , nextAuth as POST};