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
		console.log("$44")
		const response = await signIn("credentials", {
			userId: data.userId,
			password : data.password,
			redirect: false,
		})
		console.log("response",response)
	} catch (err) {
		console.error(err);
	}
}

export {onSubmit}