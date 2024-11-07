import { useEffect, useState } from "react";
import { Card } from "../../components/Card/CardCliente";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import style from "./Cliente.module.css";

export function ClientePage() {
    const [clienteList, setClienteList] = useState([]);
    const navegar = useNavigate();
    const handleRemover = (index) => {
        const novaLista = clienteList.filter((_, i) => i !== index);
        setClienteList(novaLista);
    };
    const getCliente = async () => {
        try {
            api.get('/clientes'
            ).then((response) => {
                console.log((response.data));
                setClienteList(response.data);
                
            });
        } catch (error) {
            console.error("Erro ao buscar produto:", error); 
        }
    }; useEffect(() => {
        getCliente()
    }, []);
    return (
        <>
            <button onClick={() => navegar("/")}>◀</button>
            <h2>Lista de Clientes.</h2>
            <h3 onClick={() => navegar("/cadastro")}>Cadastrar de Cliente</h3>
            <div className={style.boxcliente}>
                {clienteList.map((cli) =>
                    <Card
                        key={cli}
                        index={cli.id}
                        nome={cli.nome}
                        cpf={cli.cpf}
                        email={cli.email}
                        telefone={cli.telefone}
                        dataNascimento={cli.dataNascimento}
                        handleRemover={handleRemover}
                    />
                )}
            </div>
        </>
    );
}
