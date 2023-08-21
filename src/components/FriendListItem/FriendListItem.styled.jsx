import styled from 'styled-components';

const getSpanBgColor = condition => {
  if (condition) {
    return '#27FA02';
  } else {
    return '#FA0202';
  }
};

export const ListItem = styled.li`
  padding: 10px;
  width: 300px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  display: flex;

  span {
    width: 20px;
    height: 20px;
  }
`;
