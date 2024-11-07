package org.serratec.serratecpub.dto;

import org.serratec.serratecpub.model.ItemPedido;

public record ItemPedidoDto(
		Long id,
		double precoVenda,
		int quantidade,
		int percentualDesconto,
		double valorBruto,
		double valorLiquido,
		double valorDesconto,
		Long idProduto) {

	public ItemPedido toEntity() {
        ItemPedido itemPedido = new ItemPedido();
        itemPedido.setId(this.id);
        itemPedido.setPrecoVenda(this.precoVenda);
        itemPedido.setQuantidade(this.quantidade);
        itemPedido.setPercentualDesconto(this.percentualDesconto);
        itemPedido.setIdProduto(this.idProduto);        	
        itemPedido.calcularValores();
        return itemPedido;
    }
    public static ItemPedidoDto toDto(ItemPedido itemPedido) {
        return new ItemPedidoDto(
            itemPedido.getId(),
            itemPedido.getPrecoVenda(),
            itemPedido.getQuantidade(),
            itemPedido.getPercentualDesconto(),
            itemPedido.getValorBruto(),
            itemPedido.getValorLiquido(),
            itemPedido.getValorDesconto(),
            itemPedido.getIdProduto()
        );
    }
  
	
    
//    public ItemPedidoDto calcularValorBruto(double valor) {
//        return valor * this.quantidade;
//       
//    }
//

//
//    public double calcularValorLiquido() {
//        return calcularValorBruto() - calcularValorDesconto();
//    }
//    
}