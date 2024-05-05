import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
	// 로그인이 되어 있지 않다면 로그인 페이지로 리디렉션
	if (!token) {
		const url = request.nextUrl.clone();  // 현재 URL 복제
		url.pathname = '/signin';             // 로그인 페이지로 경로 변경
		return NextResponse.redirect(url);
	}

	// 로그인이 되어 있다면 원래 요청대로 진행
	return NextResponse.next();
}

// 미들웨어가 적용될 경로를 지정
export const config = {
	matcher: '/product/:path*',
}