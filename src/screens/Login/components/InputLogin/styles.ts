import styled from 'styled-components/native'

export const Input = styled.TextInput`
    width: 50%;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.regular};
    
    padding-top: 5px;

    margin-left: 20px;
    margin-right: 10px;
`;
