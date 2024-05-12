import React from 'react';

import SignInForm from "@/app/signIn/_components/SignInForm";
import PageTitle from "@/app/_components/PageTitle";

const SignIn = () => {
	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<PageTitle title={"로그인"} />
			<SignInForm/>
		</div>
	)
}

export default SignIn;