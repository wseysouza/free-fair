import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%; 
       
    align-items: center;
    justify-content: flex-end;
`;

export const Content = styled.View`
    width: 100%;
    height: 248px;
    padding: 30px 30px 31px ;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    align-items: center;
    justify-content: flex-end;    
    
    background: ${({ theme }) => theme.colors.backgroundForm};
    box-shadow: -5px -5px 16px rgba(0, 0, 0, 0.1);
`;

export const Background = styled.Image`
    position: absolute;
    
    width: 100%;
    height: 100%;
`;

export const ButtonInfo = styled.Text`
    color: ${({ theme }) => theme.colors.textGray};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;

    padding-right: 16px;
`;

export const ButtonRow = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const TextSendOtp = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
`
