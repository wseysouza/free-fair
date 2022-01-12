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

    padding: 30px;
    
    align-items: center;
    justify-content: flex-end;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    background: #ffffff;
    box-shadow: -5px -5px 16px rgba(0, 0, 0, 0.1);    
`;

export const Background = styled.Image`
    position: absolute;
    
    width: 421px;
    height: 100%;
`;

export const ButtonInfo = styled.Text`
    position: absolute;

    color: #4F4F4F;

    width: 96px;
    height: 26px;
    bottom: 41px;

    display: flex;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.regular};

    font-size: 16px;
    line-height: 26px;
`;

export const ButtonRow = styled.View`
  width: 100%;
    
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;