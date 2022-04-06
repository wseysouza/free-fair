import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 100%;

    position: relative;
`;


export const ContentTop = styled.Text`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.textWhite};

`;

export const ContentCenter = styled.View`
    align-items: center;
`;

export const RowTextFair = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.textWhite};
`;

export const ContentBottom = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textWhite};
    width: 190px;
    text-align: center;
    line-height: 24px;
`;


export const BackgroundTop = styled.View`
    width: 421px;
    height: 85%;
    background: #90CDF4;

    padding: 75px 35px 35px 35px; 
    justify-content: space-around;
    align-items: center;
`;

export const BackgroundBottom = styled.View`
    width: 100%;
    height: 15%;
    background: #68D391;
    padding: 30px;
    position: relative;
    align-items: center;
`;


export const ButtonGoogle = styled.TouchableOpacity`
    width: 100%;
    height: 60px;

    border-radius: 5px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.textWhite};
    
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 100px;

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


