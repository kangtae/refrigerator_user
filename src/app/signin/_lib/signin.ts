"use client"
import {signIn} from "next-auth/react";

interface FormValue {
	email: string;
	password: string
	userId: string;
	name: string;
}

const onSubmit = async (data: FormValue) => {
	try {
		const response = await signIn("credentials", {
			userId: data.userId,
			password : data.password,
			redirect: false,
		})
		if(response.status !== 200) {
			alert("아이디 및 비밀번호가 일치하지 않습니다.");
			return;
		}
		alert("로그인 하였습니다.")
	} catch (err) {
		alert("서버 에러입니다.")
	}

}

export {onSubmit}