import styled from 'styled-components/native'

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.textWhite};
    width: 90%;
    height: 55px;
    font-size: 17px;
    font-family: ${({ theme }) => theme.fonts.regular};
    
    padding: 5px;
    padding-left: 15px;
    margin-bottom: 10px;

    border-radius: 5px;
`;
