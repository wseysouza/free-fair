import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 100%;
`;


export const ContentTop = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 21px;
    color: ${({ theme }) => theme.colors.textWhite};
    
`;

export const RowTextFair = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textWhite};
    
`;

export const ContentBottom = styled.Text`
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: 20px;
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.medium};

   
    
`;


export const BackgroundTop = styled.View`
    width: 100%;
    height: 300px;
    background: #90CDF4;

    padding: 80px 35px 38px 35px; 
    justify-content: space-between;
    align-items: center;
`;

export const BackgroundBottom = styled.View`
    border-radius: 50px;
    width: 100%;
    height: 100%;
    background: #68D391;
    padding: 30px 40px ;
    align-items: center;
    bottom: 40px;
`;


export const Form = styled.View`
    width: 100%;
  
   
   
    
`;

export const TextUserInvalid = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textGray};
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-bottom: 20px;
`


