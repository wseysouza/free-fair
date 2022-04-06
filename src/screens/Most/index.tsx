// import react, { Text, View } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Wrapper, ButtonReturn, ExitText, BorderView } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Most() {

    const { logout } = useAuth()

    return (
        <Wrapper>
            <BorderView>
                <ButtonReturn onPress={logout} >
                    <MaterialCommunityIcons name="exit-run" size={24} color="black" />
                    <ExitText>Sair</ExitText>
                </ButtonReturn>
            </BorderView>
        </Wrapper>
    )

}