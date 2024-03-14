"use client";
import Input from "@/app/(afterLogin)/_components/Input";
import useInput from "@/app/(afterLogin)/hooks/useInput";

export default function ProductRegistration() {
	const productName = useInput({initialValue:""})
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("e",productName.value)
	}
	return (
		<>
			<h2 className="text-3xl font-bold">제품 등록</h2>
			<div className="mt-10">
				<form onSubmit={handleSubmit}>
					<div className="grid gap-6 mb-6 md:grid-cols-1">
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
						/>
					</div>
					<button type="submit"
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">등록
					</button>
				</form>
			</div>
		</>
	);
}
