import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            textWhite: string,

            card: string,

            territory: string,

            textGray: string,

            textGrayLight: string,

            shape: string,

            secundary: string,

            backgroundInput: string,

            dark: string,

            buttonGreen: string,

            facebook: string,

            icon: string,

            backgroundForm: string,

            loginGreen: string,

            loginBlue: string,
        },

        fonts: {
            regular: string,
            medium: string,
            bold: string
        }
    }

}