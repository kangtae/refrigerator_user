import {useState} from 'react';

const useSelect = ({options, defaultValue}) => {
	const [selectedOption, setSelectedOption] = useState(defaultValue);

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const SelectComponent = () => (
		<select value={selectedOption} onChange={handleChange}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);

	return {
		selectedOption,
		handleChange,
		SelectComponent,
	};
};

export default useSelect;