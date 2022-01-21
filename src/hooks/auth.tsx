import React, { createContext, ReactNode, useContext } from "react";

import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData {
    user: User;
    loginInWithGoogle: () => {};
}

const AuthContext = createContext({} as IAuthContextData)



function AuthProvider({ children }: AuthProviderProps) {

    const user = {
        id: '123456789',
        name: 'wesley de souza',
        email: 'wseysouza@gmail.com',
    };

    async function loginInWithGoogle() {
        try {

            console.log('test')

            const CLIENT_ID = '226903045454-8n3c7g62nfpe8q7akjbio5p9rm4bces2.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@wsey/physicalcare';
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const response = await AuthSession.startAsync({ authUrl });

            console.log(response)

        } catch (error) {

            throw new Error(error);

        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            loginInWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }