import { useState } from 'react';

export const useForm = (initForm = {}) => {

    const [ formState, setFormState ] = useState(initForm);

    const onInputChange = ({ target }:any) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
}
