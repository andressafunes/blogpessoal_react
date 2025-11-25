import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navibar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta("O usuário foi desconectado com sucesso!", "info");
        navigate("/");
    }

    let component: ReactNode

    if(usuario.token !== ""){
        component = (

            <nav className="w-full bg-linear-to-r from-sky-700 via-sky-600 to-sky-500 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

                {/* LOGO */}
                <Link to="/home" className="text-2xl font-bold hover:text-indigo-300 transition">
                    Blog Pessoal
                </Link>

                {/* MENU */}
                <div className="flex items-center gap-6 text-lg">

                    <Link to="/postagens" className="hover:text-indigo-300 transition">
                        Postagens
                    </Link>

                    <Link to="/temas" className="hover:text-indigo-300 transition">
                        Temas
                    </Link>

                    <Link to="/cadastrartema" className="hover:text-indigo-300 transition">
                        Cadastrar Temas
                    </Link>

                    <Link to='/perfil' className="hover:text-indigo-300 transition">
                        Perfil
                    </Link>
                    

                    <button
                        onClick={logout}
                        className="hover:text-red-400 transition"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </nav>

        )
    }

    return (
        <>
            {component }
        </>
    );
}

export default Navibar;
