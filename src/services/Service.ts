import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL

})

//Função para cadastrar usuaario
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}
// Função para Logar (Autenticar)
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

// Função para consultar token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

//Função de cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

//Função para atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

//Função para deletar token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
    
}
