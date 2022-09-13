import React from 'react'
import { StyledButton } from './deleteButton.styled';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg'

const DeleteButton = (props) => (

    <StyledButton {...props}>
        <DeleteIcon />
    </StyledButton>

)

export default DeleteButton;