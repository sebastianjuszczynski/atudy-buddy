import React, { useState } from 'react';
import { users as usersData } from 'data/users';


export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => { },
    deleteUser: () => { },
});

const UsersProviders = ({ children }) => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };

    const handleAddUser = (Values) => {
        const newUser = {
            name: Values.name,
            attendance: Values.attendance,
            average: Values.average,
        };
        setUsers([newUser, ...users]);
    };
    return (
        <UsersContext.Provider value={{
            users,
            handleAddUser,
            deleteUser,
        }}>
            {children}
        </UsersContext.Provider>
    )
};
export default UsersProviders;