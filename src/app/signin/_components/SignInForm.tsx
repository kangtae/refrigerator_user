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
			console.log(err);
			alert("서버 에러입니다.");
		}

	}
	return (
		<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="userId" className="block text-sm font-medium leading-6 text-gray-900">아이디</label>
							<div className="mt-2">
								<input
									id="userId"
									type="text"
									className="block w-full pl-[10px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									<small role="alert" className="text-red-500">{errors.userId.message}</small>
								)}
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									type="password"
									placeholder="*******"
									className="block w-full pl-[10px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									{...register("password", {
										required: "비밀번호는 필수 입력입니다.",
										minLength: {
											value: 7,
											message: "7자리 이상 비밀번호를 입력하세요.",
										},
									})}
								/>
							</div>
							{errors.password && (
								<small role="alert" className="text-red-500">{errors.password.message}</small>
							)}
						</div>

						<div>
							<button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
						</div>
					</form>
				</div>
	)
};

export default SignInForm;