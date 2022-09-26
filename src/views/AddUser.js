import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useWindowSize } from 'hooks/useWindowSize';
import { useForm } from 'hooks/useForm';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
};


const AddUser = () => {
    const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState)
    const context = useContext(UsersContext);
    const dimensions = useWindowSize();


    const handleSubmitUser = (e) => {
        e.preventDefault();
        if (formValues.consent) {
            context.handleAddUser(formValues);
            handleClearForm(initialFormState);
        } else {
            handleThrowError('You need to give consent');
        }

    };

    return (
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            <Title>Add new student</Title>
            <Title>Screen width: {dimensions.width}px</Title>
            <Title>Screen height: {dimensions.height}px</Title>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}></FormField>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}></FormField>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}></FormField>
            <FormField label='Consent' id='consent' name='consent' type="checkbox" value={formValues.average} onChange={handleToggleConsent}></FormField>
            <Button type='submit'>Add</Button>
            {formValues.error ? <p>{formValues.error}</p> : null}
        </ViewWrapper>
    );
};

export default AddUser;

