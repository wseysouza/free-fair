import styled from "styled-components/native";

interface ColorProps {
    color: string;
}

export const Container = styled.Pressable<ColorProps>`
    width: 100%;
    height: 55px;

    margin-top: 30px;
    flex-direction: row;
   

    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    
    background-color: ${props => props.color};

`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.textWhite};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 18px;
    
`