import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { SobrePage } from '../pages/Sobre/SobrePage';
import { ContatoPage } from '../pages/Contato/ContatoPage';
import { ClientePage } from '../pages/Cliente/ClientePage';
import { CadastroPage } from '../pages/Cadastro/CadastroPage';
import { LoginPage } from '../pages/Login/LoginPage';
import { TermosDeUsoPage } from '../pages/TermosDeUso/TermosDeUsoPage';
import { ProdutoPage } from '../pages/Produto/ProdutoPage';
import { CarrinhoPage } from '../pages/Carrinho/CarrinhoPage';



export function Rotas() {
    return (
        <>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path='cliente' element={<ClientePage />} />
                <Route path='sobre' element={<SobrePage />} />
                <Route path='produto' element={<ProdutoPage />} />
                <Route path='contato' element={<ContatoPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='cadastro' element={<CadastroPage />} />
                <Route path='termos-de-uso' element={<TermosDeUsoPage />} />
                <Route path='carrinho' element={<CarrinhoPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    );
}