export function validarEntradas(cliente) {
    if (!cliente){
        return 'Preencha todos os campos necessários.'   
    }

    const entradas = ['cpf', 'dataNascimento', 'email', 'telefone', 'senha'];
    for (let valor of entradas) {
        if (!cliente[valor]) {
            return `O ${valor.charAt(0).toUpperCase() + valor.slice(1)} é obrigatório!`;
        }
    }
    const entradasEndereco = ['cep', 'numero', 'complemento'];
    for (let valor of entradasEndereco){
        if (!cliente.endereco[valor]){
            return `O ${valor.charAt(0).toUpperCase() + valor.slice(1)} é obrigatório!`;
        }
    }
};

export function formatarBanco(cliente){
    if (!cliente) {
        throw new Error("O dados do cliente não foram cadastrados, tente novamente!");
    }
    if (cliente.dataNascimento){
        cliente.dataNascimento = cliente.dataNascimento.replace(/\D/g, '');
        cliente.dataNascimento = cliente.dataNascimento.replace(/(\d{2})(\d{2})(\d{4})/, '$3-$2-$1');
    }

    (cliente.cpf ? cliente.cpf = cliente.cpf.replace(/\D/g, ''):
    cliente.telefone ? cliente.telefone.replace(/\D/g, '') :
    cliente.endereco && cliente.endereco.cep ? cliente.endereco.cep = cliente.endereco.cep.replace(/\D/g, ''):
    'Erro ao traduzir dados de entrada para o banco de dados.'    
)
    return cliente;
};

export const handleMask = (e, mask, setState) => {
    let newValue = e.target.value;
    if (mask) {
        newValue = newValue.replace(/\D/g, '');
        (mask === 'telefone' ? newValue = newValue.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4').slice(0,16) : 
        mask === "cep" ? newValue = newValue.replace(/(\d{5})(\d{3})/, '$1-$2').slice(0,10) :
        mask === "cpf" ? newValue = newValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4').slice(0,14) :
        mask === "numero" ? newValue = newValue.slice(0, 6) :
        newValue)}
    setState(newValue);
};