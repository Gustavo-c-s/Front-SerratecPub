import { useState } from "react";
import {
  InputDate,
  InputNumb,
  InputSenha,
  InputText,
} from "../../components/Input/Input";
import { api } from "../../services/api";
import styles from "./CadastroPage.module.css";
import { useNavigate } from "react-router-dom";
import { handleMask } from "../../utils/validations";
import { validarEntradas } from "../../utils/validations";
import { formatarBanco } from "../../utils/validations";

export function CadastroPage() {
    const [cadastroList, setCadastroList] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirm, setSenhaConfirm] = useState('');

    const navigate = useNavigate();
    const handleNavigation = () => navigate('/termos-de-uso');
    const handleNavigationCadastro = () => navigate('/');

    const handleCadastrar = (e) => {
        e.preventDefault();
        const novoCadastro = {
                nome: nome,
                email: email,
                cpf: cpf,
                telefone: telefone,
                dataNascimento: dataNascimento,
                endereco: {
                    cep: cep,
                    numero: numero,
                    complemento: complemento
                },
                senha: senha,
            };
            console.log(novoCadastro);
            const errorMessage = validarEntradas(novoCadastro);
            if (errorMessage) {
                alert(errorMessage);
                return;
            }
            const formatarInfos = formatarBanco(novoCadastro);
            if (formatarInfos) {
                postCliente(novoCadastro);
                return;
            }
        };
        
    const postCliente = async (cliente) => {
        try {
            await api.post('/clientes', cliente,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            withCredentials: true
            });
            alert('Usuário cadastrado com sucesso');
            setCadastroList([...cadastroList, cliente]);
            handleNavigationCadastro();
        }
        catch (error) {
            alert("Erro no cadastro: " + error.message);
        }
    };
    return (
        <>
        <div className={styles.cadastroPage}>
                <form className={styles.cadastroWrapper} onSubmit={handleCadastrar}>
                    <h2 className="h2">cadastro</h2>
                    <div className={styles.divInput}>
                        <InputText
                            className={styles.input}
                            texto="Nome:"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                        />
                        <InputNumb
                            className={styles.input}
                            texto="CPF: "
                            placeholder="Digite seu CPF"
                            mask="cpf"
                            value={cpf}
                            onChange={(e)=>handleMask(e, 'cpf', setCpf)}
                        />
                        <InputDate
                            className={styles.input}
                            texto="Data Nascimento: "
                            value={dataNascimento}
                            onChange={(e)=>setDataNascimento(e.target.value)}
                        />
                        <InputText
                            className={styles.input}
                            texto="CEP: "
                            placeholder="Digite seu CEP"
                            mask=""
                            value={cep}
                            onChange={(e)=>handleMask(e, 'cep', setCep)}
                        />
                        <InputNumb
                            className={styles.input}
                            texto="Número da residência: "
                            placeholder="Digite o número"
                            mask="numero"
                            value={numero}
                            onChange={(e)=>handleMask(e, 'numero', setNumero)}
                        />
                        <InputText
                            className={styles.input}
                            texto="Complemento: "
                            placeholder="Digite o complemento"
                            value={complemento}
                            onChange={(e)=>setComplemento(e.target.value)}
                        />
                        <InputText
                            className={styles.input}
                            texto="Email: "
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <InputNumb
                            className={styles.input}
                            texto="Telefone: "
                            placeholder="(00)9 9999-9999"
                            mask="telefone"
                            value={telefone}
                            onChange={(e)=>handleMask(e, 'telefone', setTelefone)}
                        />
                        <InputSenha
                            className={styles.input}
                            texto="Senha: "
                            placeholder={"Digite sua senha"}
                            value={senha}
                            onChange={(e)=>setSenha(e.target.value)}
                        />
                        <InputSenha
                            className={styles.input}
                            texto="Confirme sua senha: "
                            placeholder="Digite sua senha"
                            value={senhaConfirm}
                            onChange={(e)=>setSenhaConfirm(e.target.value)}
                        />
                        <div className={styles.divTermos}>
                            <input type="checkbox"/>
                            <p>Li e aceito os</p>
                            <button onClick={handleNavigation} className={styles.buttonTermos}>termos de uso</button>
                        </div>
                        <button type="submit" className={styles.buttonCadastrar} >cadastrar-se</button>
                    </div>
                </form>
            </div>
        </>
    );
}
