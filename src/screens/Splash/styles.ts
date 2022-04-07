import styled from "styled-components/native";

export const Container = styled.ScrollView`
    width: 100%;
    height: 100%; 
       
    padding: 25px ;
    flex: 1;
`;



export const Background = styled.Image`
    width: 421px;
    height: 100%;
    left: -5px;
    top: 0px;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
`;

export const ContenInput = styled.TextInput`
    width: 100%;
    height: 60px;
    border-Width: 1px;
    padding: 10px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.backgroundInput};;
`;

export const ContentText = styled.Text`
    width: 100%;
    font-weight: bold;
    font-size:19px ;
    margin-bottom: 10px;
`;

export const Wrapper = styled.View`
    width: 100%;
    margin-bottom: 30px;
`;


export const ButtonForm = styled.Button`
    width: 100%;
    height: 80px;
    border-radius: 6px;
`;

