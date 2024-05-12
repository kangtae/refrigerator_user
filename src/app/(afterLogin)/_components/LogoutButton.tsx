"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
	const url = `${process.env.NEXT_PUBLIC_HOST}/signin`;
	const handle = async () => {
		const response = await signOut();
		console.log("response",response);
			window.location.href = url;
	}
	return (
		<button
			className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm"
			onClick={handle}>
			로그아웃
		</button>
	);
}

export default LogoutButton;