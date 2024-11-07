import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./FinalizarPedido.module.css"
import { Botao } from "../Botao/Botao";

export function FinalizarPedido({ carrinho, limparCarrinho }) {
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const usuario = localStorage.getItem('@Auth:user');
        if (usuario) {
            setCliente(JSON.parse(usuario))
        }
        setLoading(false);
    }, []);

    const postPedido = async () => {
        const datoUsuario = localStorage.getItem('@Auth:user')
        const usuario = datoUsuario ? JSON.parse(datoUsuario) : null;
        const pedido1 = {
            statusPedido: "EM_PRODUCAO",
            nomeCliente: usuario.nome,
            itemPedido: carrinho.map(item => ({
                quantidade: item.quantidade,
                percentualDesconto: 5,
                idProduto: item.id,
            })),

        };
        alert("PEDIDO CONCLUIDO"
            +"\nCLIENTE: "+pedido1.nomeCliente+
            "\nSTATUS-PEDIDO: "+pedido1.statusPedido)+
            "\nOBRIGADO POR COMPRAR NA SERRATECPUB"
        try {
            const response = await api.post('/pedidos', pedido1, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log('Pedido finalizado com sucesso:', response.data);
            limparCarrinho();
        } catch (error) {
            console.error("Erro ao finalizar o pedido:", error.response ? error.response.data : error.message);

        }

    }; if (loading) {
        return <div>Carregando....</div>
    }
    return (
        <>
            <div className={styles.corpo}>
               <button className={styles.bntLimpar} onClick={limparCarrinho}>Limpar Carrinho</button>
            <div >
                <button className={styles.bnt} onClick={postPedido}>Finalizar Pedido</button>
            </div>
        </div>
        </>
    )

}
