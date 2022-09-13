import React, { useState, useEffect } from 'react'
import UsersList from 'components/organisms/UsersList/UsersList'
import Form from 'components/organisms/Form/Form';
import { users as usersData } from 'data/users.js';
import { Wrapper } from './Root.styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

const Root = () => {
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/add-user">Add user</Link>
        </nav>
          <Routes>
            <Route path="/add-user" element={<Form handleInputChange={handleInputChange} formValues={formValues} handleAddUser={handleAddUser} />}>
            </Route>
            <Route path="/" element={<UsersList isLoading={isLoading} users={users} deleteUser={deleteUser} />}>
            </Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  )
};

export default Root;
