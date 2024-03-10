import React from 'react';

import SignInForm from "@/app/signIn/_components/SignInForm";

const SignIn = () => {
	return (
		<>
			<h1>로그인 페이지 <i className={"food-icons8-apple-fruit-100"}></i></h1>
			<br/><br/>
			<SignInForm/>
		</>
	)
}

export default SignIn;