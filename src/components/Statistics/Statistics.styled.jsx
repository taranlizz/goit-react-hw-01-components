import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: #9c9c9c;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  color: #fff;
  font-size: 16px;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 20px;
`;
