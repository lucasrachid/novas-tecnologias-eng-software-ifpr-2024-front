import { IAuthentication } from "../interfaces/authentication";

export const saveTokensToLocalStorage = (accessToken: string, refreshToken: string) => {
    const authenticationObj = {
        "access": accessToken,
        "refresh": refreshToken
    }
    localStorage.setItem('authentication', JSON.stringify(authenticationObj));
};

export const getAuthenticationFromLocalStorage = (): IAuthentication | null => {
    const tokensString = localStorage.getItem('authentication');
    return tokensString ? JSON.parse(tokensString) : null;
};

export const removeAuthenticationFromLocalStorage = () => {
    localStorage.removeItem('authentication');
};