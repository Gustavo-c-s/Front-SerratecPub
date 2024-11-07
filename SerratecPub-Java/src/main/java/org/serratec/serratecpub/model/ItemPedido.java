package org.serratec.serratecpub.model;

import java.text.DecimalFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Positive;

@Entity
public class ItemPedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Positive
	private int quantidade;

	@Positive
	private double precoVenda;

	@Positive
	private int percentualDesconto;

	private double valorBruto;
	private double valorLiquido;
	private double valorDesconto;

	@JsonBackReference
	@ManyToOne
	private Pedido pedido;

//	@JsonBackReference
//	@OneToOne(cascade = CascadeType.ALL)
//	private Produto produto;
	@JoinColumn(name="produto_id", nullable = false)
	private Long produtoId;

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

//	public Produto getProduto() {
//		return produto;
//	}
//	
	public void setPrecoVenda(Double precoVenda) {
		this.precoVenda = precoVenda;
	}

	public Long getIdProduto() {
		return produtoId;
	}

	public void setIdProduto(Long idProduto) {
		this.produtoId = idProduto;
	}

	// public void setProduto(Produto produto) {
//		this.produto = produto;
//		setPrecoVenda(produto.getValorUnitario()*2);
//	}
//	
	public Long getId() {
		return id;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public double getPrecoVenda() {
		return precoVenda;
	}

	public int getPercentualDesconto() {
		return percentualDesconto;
	}

	public double getValorBruto() {
		return valorBruto;
	}

	public double getValorLiquido() {
		return valorLiquido;
	}

	public double getValorDesconto() {
		return valorDesconto;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public void setPercentualDesconto(int percentualDesconto) {
		this.percentualDesconto = percentualDesconto;
	}

	public void setValorBruto(double valorBruto) {
		this.valorBruto = valorBruto;
	}

	public void setValorLiquido(double valorLiquido) {
		this.valorLiquido = valorLiquido;
	}

	public void setValorDesconto(double valorDesconto) {
		this.valorDesconto = valorDesconto;
	}
	public void setPrecoVenda(double valor) {
		//valor =(produto.getValorUnitario() * 2);
		this.precoVenda=valor;
	}

	public void calcularValores() {
		this.valorBruto = this.precoVenda * this.quantidade;
		this.valorDesconto = this.valorBruto * (this.percentualDesconto / 100.0);
		this.valorLiquido = this.valorBruto - this.valorDesconto;
	}

//	public boolean verificarProduto(Long id) {
//		Optional<Produto> produtoExistente = produtoRepository.findById(id);
//		if (produtoExistente.isPresent()) {
//			System.out.println("produto salvo");
//			return true;
//		}else {
//			System.out.println("produto nao existe ");
//		return false ;
//	}
//	}
	@Override
	public String toString() {
		DecimalFormat df = new DecimalFormat("0.00");
		return "\n\nQuantidade: " + quantidade + "\nValor de venda: R$ " + df.format(precoVenda)
				+ "\nPorcentagem de Desconto: " + percentualDesconto + "%" + "\nValor Bruto: R$ "
				+ df.format(valorBruto) + "\nValor Liquido: R$ " + df.format(valorLiquido) + "\nValor do Desconto: R$"
				+ df.format(valorDesconto) 
;
	}
}
