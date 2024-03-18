"use client";

import Input from "@/app/(afterLogin)/_components/Input";
import Select from "@/app/(afterLogin)/_components/Select";
import useInput from "@/app/(afterLogin)/hooks/useInput";
import fetchCommon from "@/lib/fetchCommon";
export default function RegistrationForm({categoryOptions}) {
	const productName = useInput({initialValue:""})
	const categoryId = useInput({initialValue:1})
	const productImageUrl = useInput({initialValue:""})

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			categoryId : categoryId.value,
			productName: productName.value,
			productImageUrl: productImageUrl.value
		}
		await fetchCommon({url: "/products",method: "POST", data})
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="grid gap-6 mb-6 md:grid-cols-1">
				<Select
					label="카테고리"
					options={categoryOptions}
					id="category"
					value={categoryId.id}
					onChange={categoryId.onChange}
				/>
				<Input
					label="제품명"
					type="text"
					id="productName"
					placeholder="ex : 양배추"
					onChange={productName.onChange}
					required
				/>
				<Input
					label="제품 이미지 URL"
					type="text"
					id="productImgURL"
					placeholder="이미지 주소를 넣어주세요"
					onChange={productImageUrl.onChange}
					required
				/>
			</div>
			<button type="submit"
			        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">등록
			</button>
		</form>
	)
}