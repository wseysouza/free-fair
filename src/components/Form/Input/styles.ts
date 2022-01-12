import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';


export const Container = styled.View`
  width: 350px;
  height: 60px;
  background: #f2f2f2;
  border-radius: 6px;
  margin-bottom: 16px;

  padding: 30px;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const InputRow = styled.View`
  width: 100%;
  height: 60px;
  
  border-radius: 6px ;
  
  flex-direction: row;
  align-items: center;  
`;

export const Icon = styled(FeatherIcon)`
  right: 20px;
  opacity: 0.54;
  color: #5F5F5F;
`;
