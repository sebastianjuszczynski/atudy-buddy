import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import { users as dataUser } from 'data/users';



export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => { },
  deleteUser: () => { },
});

const Root = () => {
  const [users, setUsers] = useState(dataUser);

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider value={{
            users,
            handleAddUser,
            deleteUser,
          }}>
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />}>
                </Route>
                <Route path="/" element={<Dashboard />}>
                </Route>
              </Routes>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
};

export default Root;
