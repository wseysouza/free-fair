import styled from "styled-components/native";

export const Container = styled.View`
    width:100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.loginGreen};
    flex: 1;
    padding: 60px  20px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 24px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
    
`

export const Form = styled.ScrollView`
    
`

export const Wrapper = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
`;
