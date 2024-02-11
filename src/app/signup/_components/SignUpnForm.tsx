'use client';

import React, { useRef, useState } from "react";
import { useForm} from "react-hook-form";

interface FormValue {
	email: string;
	password: string;
	userId: string;
	name: string;
}


const onSubmit = (data: FormValue) => {

}

const SignUpnForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValue>({ mode: "onChange" });
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
				<label htmlFor="name">이름</label>
				<input
					id="name"
					type="text"
					placeholder="ex) 홍길동"
					{...register("name", {
						required: "이름은 필수 입력입니다.",
						minLength: {
							value: 3,
							message: "3자리 이상 이름 입력하세요.",
						},
					})}
				/>
				{errors.name && (
					<small role="alert">{errors.name.message}</small>
				)}
			</div>
			<div>
				<label htmlFor="email">이메일</label>
				<input
					id="email"
					type="text"
					placeholder="test@email.com"
					{...register("email", {
						required: "이메일은 필수 입력입니다.",
						pattern: {
							value:
								/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
							message: "이메일 형식에 맞지 않습니다.",
						},
					})}
				/>
				{errors.email && <small role="alert">{errors.email.message}</small>}
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
			<button type="submit">회원 가입</button>
		</form>
	)
};

export default SignUpnForm;