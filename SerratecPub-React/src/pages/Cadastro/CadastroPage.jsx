import { useState } from "react";
import { InputDate, InputNumb, InputSenha, InputText } from "../../components/Input/Input";
import { api } from "../../services/api";
import styles from "./CadastroPage.module.css";
import { useNavigate } from "react-router-dom";
import { validarCadastro } from "../../utils/validations";

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

    const confirmarSenha = () => {
        return senha === senhaConfirm;
    }
    const navigate = useNavigate();
    const handleNavigation = () => navigate('/termos-de-uso');

    const handleCadastrar = () => {
        const novoCadastro = {
            nome,
            cpf,
            dataNascimento,
            email,
            telefone,
            endereco:{ cep, numero, complemento },  
        };
        const errorMessage = validarCadastro(novoCadastro);
        if (errorMessage) {
            alert(errorMessage);
            return;
        }
        postCliente(novoCadastro);
    };

    const postCliente = async (cliente) => {
        const auth = btoa("Gustavo:teste"); 

        try {
            await api.post('/clientes/cadastrar', cliente, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true
            });
            alert('Usuário cadastrado com sucesso');
            setCadastroList([...cadastroList, cliente]);
        } catch (error) {
            alert("Erro no cadastro: " + error.message);
        }
    };
    return (
        <>
            <form className={styles.cadastroWrapper} onSubmit={(e) => {
                e.preventDefault();
                if (confirmarSenha()) {
                    handleCadastrar();
                } else {
                    alert("As senhas devem ser iguais!");
                }
            }}>
                <h2>cadastro</h2>
                <div className={styles.divInput}>
                    <InputText
                        className={styles.input}
                        texto="Nome:"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={setNome}
                    />
                    <InputNumb
                        className={styles.input}
                        texto="CPF: "
                        placeholder="Digite seu CPF"
                        mask="cpf"
                        value={cpf}
                        onChange={setCpf}
                    />
                    <InputDate
                        className={styles.input}
                        texto="Data Nascimento: "
                        value={dataNascimento}
                        onChange={setDataNascimento}
                    />
                    <InputNumb
                        className={styles.input}
                        texto="CEP: "
                        placeholder="Digite seu CEP"
                        mask="cep"
                        value={cep}
                        onChange={setCep}
                    />
                    <InputNumb
                        className={styles.input}
                        texto="Número: "
                        placeholder="Digite o número"
                        mask="numero"
                        value={numero}
                        onChange={setNumero}
                    />
                    <InputText
                        className={styles.input}
                        texto="Complemento: "
                        placeholder="Digite o complemento"
                        value={complemento}
                        onChange={setComplemento}
                    />
                    <InputText
                        className={styles.input}
                        texto="Email: "
                        placeholder="Digite seu email"
                        value={email}
                        onChange={setEmail}
                    />
                    <InputNumb
                        className={styles.input}
                        texto="Telefone: "
                        placeholder="+55"
                        mask="telefone"
                        value={telefone}
                        onChange={setTelefone}
                    />
                    <InputSenha
                        className={styles.input}
                        texto="Senha: "
                        placeholder={"Digite sua senha"}
                        value={senha}
                        onChange={setSenha}
                    />
                    <InputSenha
                        className={styles.input}
                        texto="Confirme sua senha: "
                        placeholder="Digite sua senha"
                        value={senhaConfirm}
                        onChange={setSenhaConfirm}
                    />
                    <div className={styles.divTermos}>
                        <input type="checkbox"/>
                        <p>Li e aceito os</p>
                        <button onClick={handleNavigation} className={styles.buttonTermos}>termos de uso</button>
                    </div>
                    <button className={styles.buttonCadastrar} type="submit">cadastrar-se</button>
                </div>
            </form>
        </>
    );
}