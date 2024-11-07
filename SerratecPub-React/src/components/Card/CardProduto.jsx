import {Corpo, Corpo2, SubtituloCard, ParagrafoCard, ImagemCard} from "./cardPordutoStyle"
export function CardProduto({ img, nome, categoria, descricao, valorUnitario }) {
   
    return (
        <>
                <Corpo>
                <Corpo2>
                    {img ? (
                        <ImagemCard src={img} alt="Imagem do Produto"/>
                    ) : (
                        <ParagrafoCard>Imagem não disponível</ParagrafoCard>  
                    )}
                    <SubtituloCard> {nome}</SubtituloCard>
                    <ParagrafoCard> {categoria} <br/></ParagrafoCard>
                    <ParagrafoCard> {descricao} <br/></ParagrafoCard>
                    <ParagrafoCard>Valor Unitário: R${valorUnitario} <br/></ParagrafoCard>
                </Corpo2>
            </Corpo>
        </>
    )
}