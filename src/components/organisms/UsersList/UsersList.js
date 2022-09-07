import React from 'react';
import { Wrapper } from './UsersList.styled';
import { users } from 'data/users.js'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => (

    <Wrapper>
        <ul>
            {users.map((userData) => (
                <UsersListItem userData={userData} />
            ))}
        </ul>
    </Wrapper>

)

export default UsersList;

