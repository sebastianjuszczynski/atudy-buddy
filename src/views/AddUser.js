import React, { useReducer, useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
};

const actionTypes = {
    inputChange: 'INPUT CHANGE',
    clearValues: 'CLEAR VALUES',
    consentToggle: 'CONSENT TOGGLE',
    throwError: 'THROW ERROR'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.value,
            };
        case actionTypes.clearValues:
            return initialFormState;
        case actionTypes.consentToggle:
            return {
                ...state,
                consent: !state.consent,
            };
        case actionTypes.throwError:
            return {
                ...state,
                error: action.errorValue,
            }
        default:
            return state;
    }
};

const AddUser = () => {
    const [formValues, dispatch] = useReducer(reducer, initialFormState);
    const context = useContext(UsersContext);

    const handleInputChange = (e) => {
        dispatch({
            type: 'INPUT CHANGE',
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmitUser = (e) => {
        e.preventDefault();
        if (formValues.consent) {
            context.handleAddUser(formValues);
            dispatch({ type: 'CLEAR VALUES' });
        } else {
            dispatch({ type: 'THROW ERROR', errorValue: 'You need to give consent' });
        }

    };

    return (
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            <Title>Add new student</Title>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}></FormField>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}></FormField>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}></FormField>
            <FormField label='Consent' id='consent' name='consent' type="checkbox" value={formValues.average} onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}></FormField>
            <Button type='submit'>Add</Button>
            {formValues.error ? <p>{formValues.error}</p> : null}
        </ViewWrapper>
    );
};

export default AddUser;

