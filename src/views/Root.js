import React from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import UsersProviders from 'providers/UsersProvider';

const Root = () => {
 
  return (
    <Router basename="atudy-buddy">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProviders>
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />}>
                </Route>
                <Route path="/" element={<Dashboard />}>
                </Route>
              </Routes>
            </Wrapper>
          </UsersProviders>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
};

export default Root;
