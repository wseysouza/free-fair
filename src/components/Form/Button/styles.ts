import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.buttonGreen};

  width: 90px;
  height: 50px;
  
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};

  font-family: ${({ theme }) => theme.fonts.regular};

  font-size: 16px;
`;