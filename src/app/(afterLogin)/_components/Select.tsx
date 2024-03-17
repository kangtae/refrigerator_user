import React from 'react';

const Select = ({value, label, id, options}) => {
	console.log("1")
	return (
		<>
			<div>
				<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
				<select
					defaultValue={value}
					id="countries"
	        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					{options.map((option) => (
						<option key={option.id} value={option.categoryName}>
							{option.categoryName}
						</option>
					))}
				</select>
			</div>
		</>
	)
}

export default Select;