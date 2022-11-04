import styled from "styled-components/native";


export const Wrapper = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px 25px;
`;

export const Logo = styled.Image`
    width: 40px;
    height: 40px;

    border-radius: 50px;
    margin-right: 10px;
`;

export const Item = styled.View`
    width: 100%;

    flex-direction: row;
    align-items:center ;
    padding: 15px 5px;

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
   width: 87%;
   display: flex;
   flex-direction: column;
`;

export const TitleContent = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const Content = styled.Text`
    width: 100%;
    font-size: 14px;
`;

export const RowValueTotal = styled.View`
    width: 100%;
    
    justify-content: space-between;
    flex-direction: row;
`;
export const TextValueTotal = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;


