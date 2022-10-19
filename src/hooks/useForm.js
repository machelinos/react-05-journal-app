import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ validationsState, setValidationsState ] = useState({});

    useEffect(()=>{
        createValidators();
    }, [formState])

    const isFormValid = useMemo(() =>{
        for(let key in validationsState){
            if(validationsState[key]!== null) return false;
        }

        return true;

    }, [validationsState])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () =>{
        let formValidationsResults = {};
        for(let key in formValidations) {
            const [fn, errorMessage] = formValidations[key];

            formValidationsResults[`${key}Valid`] = fn(formState[key]) ? null : errorMessage;
        }
        setValidationsState(formValidationsResults);
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...validationsState,
        formValid: isFormValid 
    }
}