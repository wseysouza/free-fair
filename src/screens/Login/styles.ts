import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;

   justify-content: flex-end;
`;

export const Background = styled.Image`
    width: 421px;
    height: 100%;
    
`;

export const Content = styled.View`
    padding: 30px;
    width: 100%;
    height: 201px;
    justify-content: space-between;
    border-Top-Left-Radius: 20px;
    border-Top-Right-Radius: 20px;


    position: absolute;

    background: ${({ theme }) => theme.colors.text};

`;

export const InputRow = styled.View`
    width: 100%;
    height: 60px;

    flex-direction: row;
    align-items: center;


    border-radius: 6px ;
    background-color: ${({ theme }) => theme.colors.territory};
`;

export const ButtonsRow = styled.View`
    width: 100%;
    height: 60px;

    background-color: ${({ theme }) => theme.colors.territory};

`;

export const ButtonGoogle = styled.TouchableOpacity``;

export const ButtonFacebook = styled.TouchableOpacity``;