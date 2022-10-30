import styled from "styled-components/native";

export const Item = styled.Pressable`
    width: 100%;

    flex-direction: row;
    align-items:center ;
    padding: 15px 5px;

    border-bottom-width: 1px;
    border-bottom-color: gray;

    justify-content: space-between;
   
`;

export const Logo = styled.Image`
    width: 40px;
    height: 40px;

    border-radius: 50px;
    margin-right: 10px;
`;
export const ColumContent = styled.View`
   width: 60%;
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

export const RowContentAndImage = styled.View`
    width: 80%;
    flex-direction: row;
`;