import { Link } from "react-router-dom"

function Navibar() {
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
                    Temas
                    Cadastrar Temas
                    Perfil
                    Sair
                    </p>         
                
                </div>
            </div>
        </>

    )
}

export default Navibar