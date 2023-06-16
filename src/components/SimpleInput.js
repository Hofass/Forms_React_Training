import { useState, useRef, useEffect } from "react";

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	useEffect(()=>{
		if(enteredNameIsValid){
			console.log("Name input is valid")
		} 
	},[enteredNameIsValid])

	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = event => {
		setEnteredNameTouched(true);
		event.preventDefault();
		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			return;
		}
		setEnteredNameIsValid(true);
		console.log(enteredName);
		setEnteredName("");
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

	const nameInputClasses = nameInputIsInvalid ? "form-control invalid": "form-control "

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && <p>Name must not be empty</p>}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
