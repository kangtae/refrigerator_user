import React from 'react';

interface RadioProps {
	value: string;
	label: string;
	checked: boolean;
	onChange: (value: string) => void;
}

const Radio = ({ value, label, checked, onChange } : RadioProps) => {
	const handleChange = () => {
		onChange(value);
	};

	return (
		<label>
			<input type="radio" value={value} checked={checked} onChange={handleChange} />
			{label}
		</label>
	);
};

export default Radio;