import { useContext } from "react"
import styles from "./CarrinhoPage.module.css"
import { carrinhoContext } from "../../components/context/carrinhoContext"
import { FinalizarPedido } from "../../components/Card/FinalizarPedido"
import { Botao } from "../../components/Botao/Botao"
import { useNavigate } from "react-router-dom"

export function CarrinhoPage() {
    const { carrinhoItem, addItem, removerItem, removerUm, limparCarrinho } = useContext(carrinhoContext)
    const navigate = useNavigate();
    const handleNavigation = () => navigate('/produto');

    return (
        <div className={styles.container}>
            {carrinhoItem.map((car) => (
                <div key={car.id} className={styles.corpocar}>
                    <div className={styles.box}>
                        <h2 className={styles.nome}>{car.nome}</h2>
                        <p>{car.descricao} <br /></p>
                        <p>{car.quantidade} <br /></p>
                        <p>R${(car.valorUnitario * car.quantidade).toFixed(2)} <br /></p>
                        <div className={styles.bnt}>
                            <button onClick={() => removerUm(car.id)}>➖</button>
                            {car.quantidade == 0 && <button onClick={() => removerUm(car.id)}>➖</button> &&
                            removerItem(car.id)
                            }
                            <button onClick={() => removerItem(car.id)}>✖</button>
                            <button onClick={() => addItem(car)}>➕</button>
                        </div>
                    </div>
                </div>
            ))}
            {carrinhoItem.length === 0 && (
                <div className={styles.carrinhoVazio}>
                    <h2 className={styles.notfoundMessage}>Oops! Nenhuma bebida encontrada no seu carrinho!</h2>
                    <Botao handleClick={handleNavigation} texto="Veja as melhores bebidas"/>
                </div>
            )}
            {carrinhoItem.length > 0 &&(
            <div>
                <FinalizarPedido
                    carrinho={carrinhoItem}
                    limparCarrinho={() => limparCarrinho()}
                />
            </div>
            )}
        </div>
    )
}