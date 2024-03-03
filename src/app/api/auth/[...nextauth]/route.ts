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
				})
				const response = await authResponse.json();
				if(response.success){
					return {
						accessToken: response.accessToken,
						success: response.success
					}
				}
				return null;
			},

		})
	],
	callbacks: {
		async signIn(user, account, profile) {
			// 로그인 성공 시 호출되는 콜백
			console.log("user====>",user);
			return user.user;
		},
	}
});

export { handler as GET, handler as POST };