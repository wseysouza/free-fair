import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';


export const Container = styled.View`
  width: 350px;
  height: 60px;
  background: #f2f2f2;
  border-radius: 6px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  left: 30px;
  line-height: 21px;
  
  font-size: 16px; 
  color: rgba(0, 0, 0, 0.87);
`;

export const Icon = styled(FeatherIcon)`
  right: 20px;
  opacity: 0.54;
  color: #5F5F5F;
`;
