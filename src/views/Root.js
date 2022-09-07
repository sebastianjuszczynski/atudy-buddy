import React from 'react'
import UsersList from 'components/organisms/UsersList/UsersList'
import { Wrapper } from './Root.styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';



const Root = () => (

  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>


);

export default Root;
