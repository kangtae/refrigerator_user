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
		<button onClick={handle}>
			로그아웃
		</button>
	);
}

export default LogoutButton;