import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";

function ModalPostagem(){
    return(
        <>
            <Popup
                trigger={
                    <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
                        Nova Postagem
                    </button>
                }
                modal
                contentStyle={{
                    width: "40%",   
                    maxWidth: "90%",   
                    height: "70%",     
                    borderRadius: '1rem',
                    paddingBottom: '2rem',
                    backgroundColor: "white"
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;