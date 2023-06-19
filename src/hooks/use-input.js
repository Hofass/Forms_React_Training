import { useReducer } from "react";

const initialInputState = {
		value: "",
		isTouched: false
};

const inputStateReducer = (state, action) => {
	return initialInputState
};

const useInput = validateValue => {
 const [inputState,dispatched] = useReducer(inputStateReducer,initialInputState);



	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = event => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = event => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
