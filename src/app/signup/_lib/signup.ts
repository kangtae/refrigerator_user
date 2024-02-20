
interface FormValue {
	email: string;
	password: string;
	userId: string;
	name: string;
}

const onSubmit = async (data: FormValue) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/member/join`, {
		method: 'post',
		body: JSON.stringify(data),
		credentials: 'include',
	})
	if (response.error) {
		// 에러 처리 로직
		console.error(response.error);
	} else {
		// 회원가입 성공
		console.log("회원가입", response)
	}
}

export {onSubmit}