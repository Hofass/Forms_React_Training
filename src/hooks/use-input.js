import { useReducer } from "react";

const initialInputState = {
		value: "",
		isTouched: false
};

const inputStateReducer = (state, action) => {
  if(action.type==="INPUT"){
    return{
      value:action.value,
      isTouched:state.isTouched,  
    };
  }
  if(action.type==="BLUR"){
    return{
      isTouched:true,
      value:state.value
    }
  }
  if(action.type==="RESET"){
    return{
      value:'',
      isTouched:false
    }
  }
	return initialInputState
};

const useInput = validateValue => {
 const [inputState,dispatched] = useReducer(inputStateReducer,initialInputState);



	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = event => {
    dispatched({type:"INPUT", value:event.target.value});
	};

	const inputBlurHandler = event => {
    dispatched({type:"BLUR"});

  };

	const reset = () => {
    dispatched({type:"RESET"})
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
