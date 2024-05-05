import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {cookies} from "next/headers";

const handler = NextAuth({
	pages: {
		signIn: '/signin',
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/member/login`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						userId: credentials?.userId,
						password: credentials?.password,
					}),
				});
				const response = await authResponse.json();

				console.log("credentials?.userId", credentials?.userId);
				console.log("Response with token:", response); // 여기에서 response 구조를 확인하세요.

				if (response.accessToken) { // accessToken이 있는지 확인
					console.log("Access Token:", response.accessToken);
					return {
						name: credentials?.userId,
						token: response.accessToken // 이렇게 반환
					};
				} else {
					return null;
				}
			},

		})
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = user.token; // 사용자가 로그인할 때 반환된 token을 JWT token에 추가
			}
			return token;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken; // JWT에서 accessToken을 세션에 추가
			console.log("session",session)
			return session;
		}
	},
	session: {
		strategy: 'jwt'
	}
});

export { handler as GET, handler as POST };