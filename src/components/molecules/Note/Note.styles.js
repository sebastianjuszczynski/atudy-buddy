import styled from 'styled-components';
import DeleteButton from '../../atoms/DeleteButton/deleteButton';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.slateGrey};
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;