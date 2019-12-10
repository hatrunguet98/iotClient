import styled from 'styled-components';

export const Wrap = styled.div`
  with:100%;
  height:170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width:auto;
  background-color:${props => props.color};
  font-size: 40px;
  text-align: center;
  color: antiquewhite;
  text-weight: bold;
`;
export const Card = styled.div`
  width:250px;
  height:130px;
  margin:10px;
  padding: 10px;
  border-radius: 50px 20px;
  display: flex;
  align-items: center;
  background-color:${props => props.color};
`;

export const Icon = styled.div`
  background-image: url('${props => props.image}') ;
  ackground-position: center;
  background-repeat: no-repeat;
  width:50%;
  height:60%;
`;

export const Content = styled.div`
  width:100%;
  height:60%;
  margin-right:10px;
`;

export const Value = styled.div`
  font-size: 20px;
  text-align: right;
  font-weight: bold;
  color: antiquewhite
`;

export const Note = styled.div`
font-size: 20px;
text-align: right;
color: antiquewhite
`;