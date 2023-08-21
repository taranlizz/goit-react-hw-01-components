import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 10px;
  width: 300px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    width: 20px;
    height: 20px;
    background-color: ${props => (props.$status ? '#27FA02' : '#FA0202')};
    border-radius: 50%;
  }

  img {
    border: 1px solid #e6e6e6;
  }

  p {
    font-size: 25px;
    font-weight: 600;
  }
`;
