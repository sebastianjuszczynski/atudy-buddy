import React, { useState, useEffect } from 'react';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styled';
import { users as usersData } from 'data/users.js'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styled';

const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usersData) {
                resolve([...usersData]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    })
};

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);
    const [formValues, setFormValues] = useState(initialFormState);

    useEffect(() => {
        setLoadingState(true);
        mockAPI()
            .then((data) => {
                setLoadingState(false);
                setUsers(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,

        });
        console.log(formValues)
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };
        setUsers([newUser, ...users]);
        setFormValues(initialFormState);
    };

    return (
        <>
            <Wrapper as='form' onSubmit={handleAddUser}>
                <StyledTitle>Add new student</StyledTitle>
                <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}></FormField>
                <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}></FormField>
                <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}></FormField>
                <Button type='submit'>Add</Button>
            </Wrapper>
            <Wrapper>
                <StyledTitle>{isLoading ? 'Loading...' : 'Users list'}</StyledTitle>
                <StyledList>
                    {users.map((userData) => (
                        <UsersListItem deleteUser={deleteUser} userData={userData} />
                    ))}
                </StyledList>
            </Wrapper>
        </>
    )
}

export default UsersList;

