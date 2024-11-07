import { useContext, useEffect, useState } from "react";
import { CardProduto } from "../../components/Card/CardProduto";
import style from './Produto.module.css';
import { api } from "../../services/api";
import { InputNumb } from "../../components/Input/Input";
import { Botao } from "../../components/Botao/Botao";
import { carrinhoContext } from "../../components/context/carrinhoContext";

export function ProdutoPage() {
    const [produtoList, setProdutoList] = useState([
        {
            id: 30,
            nome: 'cerveja',
            categoria: 'Bebida',
            descricao: 'produto.descricao',
            qntd: 2,
            valorBruto: 3.5
        },
        {
            id: 40,
            nome: 'cerveja',
            categoria: 'Bebida',
            descricao: 'descricao',
            qntd: 2,
            valorBruto: 3.5
        },
        {
            id: 60,
            nome: 'cerveja',
            categoria: 'Bebida',
            descricao: 'descricao',
            qntd: 2,
            valorBruto: 3.5
        },
    ]);
    const [qntd, setQntd] = useState({});
    const { addItem,carrinhoItem } = useContext(carrinhoContext);

    // Função para alterar quantidade de um produto específico
    const handleQuantidadeChange = (produtoId, value) => {
        setQntd(prevQntd => ({ ...prevQntd, [produtoId]: parseInt(value) || 1 }));
    };

    // Função para adicionar produto ao carrinho usando contexto
    const handleAddProduto = (produto) => {
        const quantidade = qntd[produto.id] || 1; // Usa a quantidade do input ou 1
        addItem({ ...produto, quantidade });
        setQntd(qntd[produto.id] || 1);
    };
    useEffect(() => {
        getProduto();
    }, []);

    const getProduto = async () => {
        try {
            const response = await api.get('/produtos');
            setProdutoList(response.data);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };

    const categories = [...new Set(produtoList.map(produto => produto.categoria))];

    return (
        <>
        <div className={style.container}>
            <h1 className={style.h1}>PRODUTOS</h1>
            
            <div className={style.corpo}>
                <div className={style.boxproduto}>
                    {categories.map(categoria => (
                        <div key={categoria}>
                            <h2 className={style.h2}>{categoria}</h2>
                            <div className={style.boxbebida}>
                                {produtoList.filter(produto => produto.categoria === categoria).map((pro) => (
                                    <div className={style.box} key={pro.id}>
                                        <CardProduto
                                            key={pro.id}
                                            img={pro.imagem}
                                            nome={pro.nome}
                                            descricao={pro.descricao}
                                            valorUnitario={pro.valorUnitario?.toFixed(2)}
                                        />
                                        <div className={style.input}>
                                            <InputNumb
                                                texto={"Quantidade: "}
                                                placeholder={'Digite a quantidade...'}
                                                mask='numero'
                                                value={qntd[pro.id] || 1}
                                                onChange={(e) => handleQuantidadeChange(pro.id, e.target.value)}
                                            />
                                            <Botao
                                                handleClick={() => handleAddProduto(pro)}
                                                texto={'➕'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
}
