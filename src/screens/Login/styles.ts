import styled from "styled-components/native";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Form } from '@unform/mobile';

export const IconPhone = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.colors.textGrayLight};
    margin-left: 20px;
`;
export const IconFacebook = styled(FontAwesome)`
    color: ${({ theme }) => theme.colors.textWhite};
    margin-right: 10px;
`;


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

    background: ${({ theme }) => theme.colors.textWhite};

`;

export const Row = styled.View`
    width: 100%;
    height: 60px;

    flex-direction: row;
    align-items: center;

    box-shadow: 10px 10px red; 

    border-radius: 6px ;
    background-color: ${({ theme }) => theme.colors.backgroundInput};
`;


export const ButtonsRow = styled.View`
    width: 100%;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
`;

export const GoogleView = styled.View`
    box-shadow:10px 5px 5px red;
`;

export const ButtonGoogle = styled.TouchableOpacity`
    width: 160px;
    height: 100%;

    border-radius: 5px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.textWhite};
    
    justify-content: center;
    align-items: center;
    
    box-shadow: 100px 50px 50px black;
`;




export const ButtonFacebook = styled.TouchableOpacity`
    width: 160px;

    border-radius: 5px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.facebook};

    justify-content: center;
    align-items: center;
`;

export const ImageGoogle = styled.Image`
    width: 45px;
    height: 45px;
    margin-right: 10px;
`;

export const TextGoogle = styled.Text`
    height: 30px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textGray};
`;

export const TextFacebook = styled.Text`

    height: 30px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textWhite};
`;

export const RowForm = styled(Form)`
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`;