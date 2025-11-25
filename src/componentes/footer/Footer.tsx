import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    const data = new Date().getFullYear();

     const { usuario } = useContext(AuthContext);

     let component: ReactNode
     
         if(usuario.token !== ""){
             component = (

                 <div className="flex justify-center bg-linear-to-r from-sky-700 via-sky-600 to-sky-500 text-white">
                <div className=" container flex flex-col items-center py-4">

                    <p className="text-xl font-bold">
                        Blog Pessoal Generation | Copyright: {data}
                    </p>

                    <p className="text-lg">
                        Acesse nossas resdes sociais
                    </p>

                    <div className=" flex gap-2">
                        <a href="https://www.linkedin.com/in/andressa-funes/" target="_blank">
                            <LinkedinLogoIcon size={48} weight="bold" />
                        </a>
                        <a href="https://www.instagram.com/andressafunes/" target="_blank">
                            <InstagramLogoIcon size={48} weight="bold" />
                        </a>
                        <a href="https://www.facebook.com/andressa.funes/" target="_blank">
                            <FacebookLogoIcon size={48} weight="bold" />
                        </a>
                        <a href="https://github.com/andressafunes" target="_blank">
                            <GithubLogoIcon size={48} weight="bold" />
                        </a>                  
                                         
                    </div>
                </div>
            </div>

             )
         }

    return (

        <>
           {component}
        </>

    )
}

export default Footer