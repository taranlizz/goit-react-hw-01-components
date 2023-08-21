import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
`;

export const TableHead = styled.thead`
  th {
    width: 250px;
    height: 40px;
    background-color: #181818;
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
  }
`;

export const TableBody = styled.tbody`
  tr {
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    background-color: #eaeaea;
    font-weight: 600;
  }
`;
