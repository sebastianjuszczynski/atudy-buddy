import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styled';






const UsersList = ({ isLoading, users, deleteUser }) => {


    return (
        <Wrapper>
            <StyledTitle>{isLoading ? 'Loading...' : 'Users list'}</StyledTitle>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItem deleteUser={deleteUser} userData={userData} />
                ))}
            </StyledList>
        </Wrapper>
    )
}

export default UsersList;

