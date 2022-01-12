import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #6FCF97;

  width: 90px;
  height: 50px;
  
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
`;