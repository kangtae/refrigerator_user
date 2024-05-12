
import React from 'react';
import SignUpForm from "@/app/signup/_components/SignUpForm";
import PageTitle from "@/app/_components/PageTitle";

const SignUp = () => {
	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<PageTitle title={"회원가입"} />
			<SignUpForm/>
		</div>
	)
}

export default SignUp;