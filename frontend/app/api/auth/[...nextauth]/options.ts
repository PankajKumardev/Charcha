import { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authOption: AuthOptions = {
  pages: {
    signIn: '/',
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization : {
        params : {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
        }
      }
    }),
  ],
};
