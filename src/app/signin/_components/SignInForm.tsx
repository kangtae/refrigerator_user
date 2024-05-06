'use client';

import React from "react";
import { useForm} from "react-hook-form";
import {signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';


interface FormValue {
	email: string;
	password: string;
	userId: string;
	name: string;
}


const SignInForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValue>({ mode: "onChange" });
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
			router.push("/product")
		} catch (err) {
			alert("서버 에러입니다.")
		}

	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-control__items">
				<label htmlFor="userId">아이디</label>
				<input
					id="userId"
					type="text"
					placeholder="아이디를 입력해주세요."
					{...register("userId", {
						required: "아이디는 필수 입력입니다.",
						minLength: {
							value: 4,
							message: "4자리 이상 아이디를 입력하세요",
						},
					})}
				/>
				{errors.userId && (
					<small role="alert">{errors.userId.message}</small>
				)}
			</div>
			<div className="form-control__items">
				<label htmlFor="password">비밀번호</label>
				<input
					id="password"
					type="password"
					placeholder="*******"
					{...register("password", {
						required: "비밀번호는 필수 입력입니다.",
						minLength: {
							value: 7,
							message: "7자리 이상 비밀번호를 입력하세요.",
						},
					})}
				/>
				{errors.password && (
					<small role="alert">{errors.password.message}</small>
				)}
			</div>
			<button type="submit">로그인</button>
		</form>
	)
};

export default SignInForm;