import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styled';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title'

const UsersList = ({ users }) => {
    return (
        <>
            <Title>Student list</Title>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItem userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
}

export default UsersList;

