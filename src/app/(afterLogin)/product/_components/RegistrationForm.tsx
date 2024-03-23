"use client";
import {useState} from "react";

import Input from "@/app/(afterLogin)/_components/Input";
import Select from "@/app/(afterLogin)/_components/Select";
import useInput from "@/app/(afterLogin)/hooks/useInput";
import fetchCommon from "@/lib/fetchCommon";
import ModalImgUrl from "@/app/(afterLogin)/product/_components/ModalImgUrl";
export default function RegistrationForm({categoryOptions, inItData ,paramsId}) {
	let inItDataProduct = null;
	if(inItData){
		inItDataProduct = categoryOptions.find(option => {
			return inItData.categoryName === option.categoryName;
		})
		console.log("inItDataProduct",inItDataProduct);
	}
	const productName = useInput({initialValue:inItData?.productName || ""})
	const categoryId = useInput({initialValue: inItDataProduct?.id || 1})
	const productImageUrl = useInput({initialValue:inItData?.productImageUrl || ""})
	const [isModalUrl , setIsModalUrl] = useState(false)
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			categoryId : Number(categoryId.value),
			productName: productName.value,
			productImageUrl: productImageUrl.value
		}
		const url = inItData ? `/products/${paramsId}` : "/products";
		const method = inItData ? "PUT" : "POST";
		await fetchCommon({url: url,method: method, data})
	}
	const toggleModal = () => {
		setIsModalUrl(!isModalUrl)
	}
	const submitIconClass = (value) => {
		productImageUrl.set(value)
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="grid gap-6 mb-6 md:grid-cols-1">
					<Select
						label="카테고리"
						options={categoryOptions}
						id="category"
						value={categoryId.value}
						onChange={categoryId.onChange}
					/>
					<Input
						label="제품명"
						type="text"
						id="productName"
						placeholder="ex : 양배추"
						value={productName.value}
						onChange={productName.onChange}
						required
					/>

				</div>
				<div className="grid gap-6 mb-6 md:grid-cols-2">
					<Input
						label="제품 이미지 URL"
						type="text"
						id="productImgURL"
						placeholder="이미지 찾기로 등록해주세요"
						onChange={productImageUrl.onChange}
						value={productImageUrl.value}
						required
						disabled
					/>
					<div>
						<button data-modal-target="default-modal" data-modal-toggle="default-modal"
						        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						        onClick={toggleModal}
						        type="button">
							이미지 찾기
						</button>
					</div>
				</div>
				<button type="submit"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					{inItData ? "수정" : "등록"}
				</button>
			</form>
			{isModalUrl && <ModalImgUrl
				onClose={toggleModal}
				onSubmit={submitIconClass}
				defaultValue={productImageUrl.value}
			/>}
		</>

	)
}