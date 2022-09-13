import React from 'react';
import { StyledList, Wrapper } from './UsersList.styled';
import { users } from 'data/users.js'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => (

    <Wrapper>
        <StyledList>
            {users.map((userData) => (
                <UsersListItem userData={userData} />
            ))}
        </StyledList>
    </Wrapper>

)

export default UsersList;

