import React from 'react';
import { StyledTitle, Wrapper } from '../UsersList/UsersList.styled';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styled';

const Form = ({handleAddUser, formValues, handleInputChange}) => {

    return (
            <Wrapper as="form" onSubmit={handleAddUser}>
                <StyledTitle>Add new student</StyledTitle>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}></FormField>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}></FormField>
                <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}></FormField>
                <Button type='submit'>Add</Button>
            </Wrapper>   
    );
};

export default Form;

