import React, {Fragment, useState} from 'react';
import {PRODUCT_ICONS} from "@/app/(afterLogin)/product/_constant/productIcons";
import Radio from "@/app/(afterLogin)/_components/Radio";
const ModalImgUrl = ({onClose, onSubmit,defaultValue}) => {
	const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
	const handleRadioChange = (value: string) => {
		setSelectedValue(value);
	};
	const handleSubmit = () => {
		onSubmit(selectedValue)
		onClose()
	}
	return (
			<>
				<div id="default-modal"
				     aria-hidden="true"
				     className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full flex bg-black bg-opacity-50">
					<div className="relative p-4 w-full max-w-2xl max-h-full">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									제품 이미지
								</h3>
							</div>
							<div className="p-4 md:p-5 space-y-4">
								<ul>
									{PRODUCT_ICONS.map(icon => {
										return (
											<Fragment key={icon.id}>

												<li className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
													<Radio
														label={icon.label}
														value={icon.value}
														checked={selectedValue === icon.value}
														onChange={handleRadioChange}
													/>
												</li>
											</Fragment>
										)
									})}
								</ul>
							</div>
							<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
								<button data-modal-hide="default-modal"
								        onClick={handleSubmit}
								        type="button"
								        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									적용
								</button>
								<button data-modal-hide="default-modal"
								        onClick={onClose}
								        type="button"
								        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">취소
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
;

export default ModalImgUrl;