import React from 'react';
import { users } from 'data/users.js'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

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

