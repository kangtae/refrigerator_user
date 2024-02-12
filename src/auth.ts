
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from 'next/headers'

export const {

} = NextAuth({
	pages: {
		singUp: '/signup',
	},
	callbacks: {
		jwt({ token}) {
			console.log('auth.ts jwt', token);
			return token;
		},
		session({ session, newSession, user}) {
			console.log('auth.ts session', session, newSession, user);
			return session;
		}
	},
	events: {
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				alert(55)
				const authResponse = await fetch(`${process.env.AUTH_URL}/api/auth/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						id: credentials.username,
						password: credentials.password,
					}),
				})
				alert("2")
				let setCookie = authResponse.headers.get('Set-Cookie');
				console.log('set-cookie', setCookie);
				if (setCookie) {
					const parsed = cookie.parse(setCookie);
					cookies().set('connect.sid', parsed['connect.sid'], parsed); // 브라우저에 쿠키를 심어주는 것
				}
				if (!authResponse.ok) {
					alert("4444")
					return null
				}

				const user = await authResponse.json()
				console.log('user', user);
				return {
					email: user.id,
					name: user.nickname,
					image: user.image,
					...user,
				}
			},
		}),
	]
});