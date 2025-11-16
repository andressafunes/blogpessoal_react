import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

function Login() {

    const navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)

    const {usuario, handleLogin, isLoading} = useContext(AuthContext)

    useEffect( () => {
      if(usuario.token != ""){
        navigate('/home')
      }
    }, [usuario])
    
      function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
          ...usuarioLogin,
          [e.target.name]: e.target.value
        })
      }

      function login(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        handleLogin(usuarioLogin);
      }

      console.log(JSON.stringify(usuarioLogin));

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen
          place-items-center font-bold"
      >

        {/* Coluna da Esquerda */}

        <div className="flex justify-center items-center w-full h-full py-4">
          <form className="flex flex-col w-full max-w-md gap-4"
          onSubmit={login}>
            <h2
              className="text-5xl text-slate-900 text-center"
            >Entrar</h2>

            <div className="flex flex-col w-full">

              <label htmlFor="usuario">Usuario</label>

              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
               />

            </div>

            <div className="flex flex-col w-full">

              <label htmlFor="senha">Senha</label>

              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2" 
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
               />

            </div>

            {/* Link/Botão */}
            <div
              className="flex justify-around w-full gap-8"
            >
              <button type="submit"
                className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
              >
                {
                  isLoading ?
                    <ClipLoader
                      color="#ffffff"
                      size={24}
                    />

                  :

                    <span>Entrar</span>

                }
              </button>
            </div>
            <hr className="border-slate-800 w-full" />
            <p className="text-center"> Ainda não tem uma conta? {' '}
              <Link to="/cadastro" className="text-indigo-800 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>

        {/* Coluna da Direita */}

        <div
          className="bg-[url('http://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat
                      w-full min-h-screen bg-cover bg-center"
        ></div>
      </div>
    </>
  )
}

export default Login
