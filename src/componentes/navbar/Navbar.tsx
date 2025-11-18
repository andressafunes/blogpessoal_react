import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navibar() {

    const navigate = useNavigate();

    const {handleLogout} = useContext(AuthContext)

    function logout(){

        handleLogout();
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
        
    }

    return (

        <>
            <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <div className="container flex justify-between text-lg mx-8">
                   
                   <p className="text-2xl font-bold"><Link to="/home">
                    Blog Pessoal</Link></p> 

                </div>
                <div className="container flex justify-end mx-4">
                    
                    <p>
                    Postagens
                    <Link to='/temas' className="hover:underline">Temas</Link>
                    <Link to='/cadastrartema' className="hover:underline">Cadastrar Temas</Link>
                    Perfil
                    <Link to='' onClick={logout} className="houver:underline">Sair</Link>
                    </p>         
                
                </div>
            </div>
        </>

    )
}

export default Navibar