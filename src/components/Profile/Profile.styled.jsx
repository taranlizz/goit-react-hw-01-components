import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
`;

export const WrapperUserInfo = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  img {
    width: 110px;
    height: 110px;
    margin-bottom: 20px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
`;

export const Username = styled.p`
  color: #323232;
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  color: #b2b2b2;
`;

export const Location = styled.p`
  color: #b2b2b2;
  font-size: 18px;
`;

export const StatsList = styled.ul`
  display: flex;
  border-radius: 5px;
`;

export const Item = styled.li`
  width: 100px;
  height: 80px;
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border: 1px solid #e6e6e6;
`;

export const Name = styled.span`
  color: #b2b2b2;
`;

export const Value = styled.span`
  color: #323232;
  font-weight: 700;
`;
