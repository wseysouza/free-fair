import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 100%;

    position: relative;
`;


export const ContentTop = styled.Text`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: bold;

`;

export const ContentCenter = styled.View`
    align-items: center;
`;

export const RowTextFair = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.textWhite};
`;

export const ContentBottom = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textWhite};

    line-height: 24px;
`;


export const BackgroundTop = styled.View`
    width: 100%;
    height: 65%;
    background: #90CDF4;

    padding: 115px 35px 0 35px; 
    justify-content: space-around;
    align-items: center;
`;

export const BackgroundBottom = styled.View`
    width: 100%;
    height: 35%;
    background: #68D391;
    padding: 30px;
    align-items: center;
`;


export const Form = styled.View`
    width: 100%;
   
    border-radius: 5px;
    
    justify-content: center;
    align-items: center;
    
`;


