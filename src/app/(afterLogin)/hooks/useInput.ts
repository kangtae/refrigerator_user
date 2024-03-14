import { useState, ChangeEvent } from 'react';

interface UseInputProps {
	initialValue?: string;
}

const useInput = ({ initialValue = '' }: UseInputProps = {}) => {
	const [value, setValue] = useState<string>(initialValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return {
		value,
		onChange: handleChange,
		reset: () => setValue(''),
	};
};

export default useInput;