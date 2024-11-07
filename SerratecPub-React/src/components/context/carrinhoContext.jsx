import { createContext, useState, useEffect } from "react";


const carrinhoContext = createContext();

const CarrinhoProvider = (props) => {
   
    const [carrinhoItem, setCarrinhoItem] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);

   
    function addItem(produto) {
        setCarrinhoItem((prevCarrinho) => {
         
            const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
    
            if (itemExistente) {
             
                return prevCarrinho.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
       
                return [...prevCarrinho, { ...produto, quantidade: 1 }];
            }
        });
    }
    function removerUm(produtoId) {
        setCarrinhoItem((prevCarrinho) => {
            return prevCarrinho
                .map((item) =>
                    item.id === produtoId
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
            
        });
    }
    
    function removerItem(id) {
        const novoCarrinho = carrinhoItem.filter(produto => produto.id !== id);
        setCarrinhoItem(novoCarrinho);
    }

    function limparCarrinho() {
        setCarrinhoItem([]);
    }

    useEffect(() => {
        const total = carrinhoItem.reduce((acc, item) => acc + item.quantidade * item.valorUnitario, 0);
        setValorTotal(total);
    }, [carrinhoItem]);

    return (
        <carrinhoContext.Provider
            value={{
                carrinhoItem,
                valorTotal,
                addItem,
                removerItem,
                limparCarrinho,
                removerUm
            }}
        >
            {props.children}
        </carrinhoContext.Provider>
    );
};

export { carrinhoContext, CarrinhoProvider };
