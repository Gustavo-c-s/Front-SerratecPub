import { useState } from "react"
import { Botao } from '../../components/Botao/Botao';
import { useNavigate } from "react-router-dom";
import { InputNumb, InputText, SelectCategoria } from "../../components/Input/Input";

export function CadastraProduto() {
    const [produto, setProduto] = useState([]);
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [qntdEstoque, setQntdEstoque] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");

    const handleCategoria =(clin)=>{
        setCategoria(clin.target.value)
    }
    const handleCadastra = () => {
        const cadastrar = {
            nome,
            categoria,
            descricao,
            qntdEstoque,
            valorUnitario
        }
        postProduto(cadastrar);
    }
    const navegar = useNavigate();
    const postProduto = async (produtocd) => {
        const auth = btoa("Gustavo:teste");

        try {
            await api.post('/produtos/cadastrar', produtocd, {
                headers: {
                    'Authorization': `Basic ${auth}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log('Cadastro foi um sucesso');
            setCadastroList([...produto, produtocd]);
        } catch (error) {
            console.error("Erro no cadastro:", error);
        }
    };


    return (
        <>
            <div>
                <Botao
                    handleClick={() => navegar('/')}
                    texto={'◀'}
                />
                <form onSubmit={handleCadastra}>
                    <h3>CADASTRO DE PRODUTO</h3>
                    <div>
                        
                        <InputText
                            texto={'Nome do Produto: '}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <SelectCategoria
                        texto={'Categoria: '}
                        value={categoria}
                        onChange={handleCategoria}
                        />
                        <InputText
                            texto={'Descrição: '}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                        <InputNumb
                            texto={'Quantidade em Estoque: '}
                            value={qntdEstoque}
                            onChange={(e) => setQntdEstoque(e.target.value)}
                        />
                        
                        
                        <InputText
                            texto={'Valor Unitario: '}
                            value={valorUnitario}
                            onChange={(e) => setValorUnitario(e.target.value)}
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}