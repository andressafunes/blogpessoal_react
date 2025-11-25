import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps){

    // Inicializar o Estado usuario (Guardar os dados do usuario autenticado)
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    //Inicializar o Estado isLogin (Exiber e Ocultar o loader no Formulário de login)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //Implementação da Função de logon (Autenticação no Beckend)
    async function handleLogin(UsuarioLogin: UsuarioLogin) {
        setIsLoading(true);

        try{
            await login(`/usuarios/logar`, UsuarioLogin, setUsuario);
            ToastAlerta("Usuário autenticado com sucesso!", "sucesso");

        }catch(error){
            ToastAlerta("Os dados do usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)        
    }

    // Implementação da Função de logout (desconectasr o usuario)
    function handleLogout(){

        setUsuario({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
        })

    }
    return(
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}