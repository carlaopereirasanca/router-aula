import { useParams } from "react-router-dom";

export default function Postagem() {

    const parametros = useParams();
    console.log(parametros);

    return (
        
        <h1>Texto da postagem... Valor de parametros: {parametros.id}</h1>
    );

}

