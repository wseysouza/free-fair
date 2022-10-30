import styled from 'styled-components/native'
import MaskInput from 'react-native-mask-input';

export const Input = styled(MaskInput)`
    background-color: ${({ theme }) => theme.colors.textWhite};
    width: 100%;
    height: 55px;
    font-size: 17px;
    font-family: ${({ theme }) => theme.fonts.regular};
    
    padding: 5px;
    padding-left: 15px;
    margin-bottom: 25px;

    border-radius: 50px;
`;
