import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {cookies} from "next/headers";

const handler = NextAuth({
	pages: {
		signIn: '/signin',
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials, req): Promise<any> {
				console.log("credentials")
;				try {
					console.log("진입",process.env.NEXT_PUBLIC_BASE_URL)
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_BASE_URL}/member/login`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								userId: credentials?.userId,
								password: credentials?.password,
							}),
						})
					console.log("res========>",res)
					let setCookie = res.headers.get('Set-Cookie');
					console.log("setCookie=>>>>>",res.headers.get('Set-Cookie'))
					const user = await res.json()
					return user || null
				} catch (e) {
					console.log("실패33")
					throw new Error(e.response)
				}
			}
		})
	],

	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = true
			console.log("callbacks",credentials)
			if (isAllowedToSignIn) {
				return true
			} else {
				// Return false to display a default error message
				return false
				// Or you can return a URL to redirect to:
				// return '/unauthorized'
			}
		}
	}
});

export { handler as GET, handler as POST };