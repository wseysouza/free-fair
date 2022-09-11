import styled from "styled-components/native";

export const Container = styled.View`
    width:100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.buttonGreen};
    flex: 1;
    padding: 60px  40px;
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
