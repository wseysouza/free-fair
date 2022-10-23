import styled from "styled-components/native";


export const Wrapper = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 10px 15px;
`;

export const Logo = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 10px;
`;

export const Item = styled.Pressable`
    width: 100%;
    flex-direction: row;
    align-items:center ;
    padding: 5px;
    border-bottom-width: 1px;
    border-bottom-color: gray;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 0 60px 0 60px;
    font-weight: bold;
    line-height: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
`;


export const ColumContent = styled.View`
   width: 60%;
   display: flex;
   flex-direction: column;
   margin-right: 10px;
`;

export const TitleContent = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;


export const Content = styled.Text`
    width: 100%;
    font-size: 14px;
`;

export const ConteinerModal = styled.View`
    flex: 1;    
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); ;
`
export const ContentModal = styled.View`
    width: 80%;
    background-color:#E5E5E5 ;
    padding: 24px;
    border-radius: 5px;
    margin: 20% 24px 0;
`

export const Background = styled.Image`
    width: 421px;
    height: 100%;
    left: -5px;
    top: 0px;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
`;

export const ContenInput = styled.TextInput`
    width: 100%;
    height: 45px;
    border-Width: 1px;
    padding: 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.backgroundInput};
`;

export const ContentText = styled.Text`
    width: 100%;
    font-weight: bold;
    font-size:12px;
    margin-bottom: 4px;
`;

export const WrapperModal = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const ButtonForm = styled.Button`
    width: 100%;
    height: 80px;
    border-radius: 6px;
`;

export const RowClosed = styled.View`
    width: 100%;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const Button = styled.Pressable`
    flex-direction: row;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 30px ;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.loginGreen};
`
export const TextButton = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textWhite};
    margin-left: 10px;
`;