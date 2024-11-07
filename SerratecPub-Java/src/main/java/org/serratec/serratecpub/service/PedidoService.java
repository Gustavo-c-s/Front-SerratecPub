package org.serratec.serratecpub.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.serratec.serratecpub.dto.PedidoDto;
import org.serratec.serratecpub.dto.RelatorioPedidoDto;
import org.serratec.serratecpub.model.Cliente;
import org.serratec.serratecpub.model.ItemPedido;
import org.serratec.serratecpub.model.Pedido;
import org.serratec.serratecpub.model.Produto;
import org.serratec.serratecpub.model.StatusPedido;
import org.serratec.serratecpub.repository.ClienteRepository;
import org.serratec.serratecpub.repository.PedidoRepository;
import org.serratec.serratecpub.repository.ProdutoRepository;
import org.serratec.serratecpub.util.EnderecoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;

	@Autowired
	private ProdutoRepository produtoRepository;
	@Autowired
	private ClienteRepository clienteRepository;

    @Autowired
    private EnderecoUtil enderecoUtil;
    
    @Autowired
    private EmailService email;

	public List<PedidoDto> obterTodosPedidos() {
		return pedidoRepository.findAll().stream().map(PedidoDto::toDto).toList();
	}

	public Optional<PedidoDto> obterPedidosPorId(Long id) {
		if (!pedidoRepository.existsById(id)) {
			return Optional.empty();
		}
		return Optional.of(PedidoDto.toDto(pedidoRepository.findById(id).get()));
	}

//    public List<PedidoDto> obterPedidosPorNomeCliente(String nome) {
//    	return pedidoRepository.BuscarPedidoPorNomeCliente(nome).stream().map(PedidoDto::toDto).toList();
//    }
//    
	public List<PedidoDto> obterPorData(LocalDate data) {
		return pedidoRepository.findByDataPedido(data).stream().map(PedidoDto::toDto).toList();
	}

	public List<PedidoDto> obterPorStatus(StatusPedido status) {
		return pedidoRepository.findByStatusPedido(status).stream().map(PedidoDto::toDto).toList();
	}

	public Optional<RelatorioPedidoDto> obterRelatorioPedido(Long id) {
		Optional<Pedido> pedido = pedidoRepository.findById(id);
		if (pedido.isPresent()) {
			return Optional.of(RelatorioPedidoDto.toDto(pedido.get()));
		}
		return Optional.empty();
	}

	public PedidoDto salvarPedido(PedidoDto pedidoDto) {
		Pedido pedidoEntity = pedidoDto.toEntity();
//		 enderecoUtil.processarEndereco(pedidoDto.cliente(),
//		 pedidoEntity.getCliente());
		verificarCliente(pedidoEntity.getNomeCliente(),pedidoEntity);
		pedidoEntity.getItemPedido().forEach(itemPedido -> verificarProduto(itemPedido.getIdProduto(), itemPedido));
		pedidoEntity.setValorTotal(pedidoDto.valorTd(pedidoEntity));
		pedidoEntity = pedidoRepository.save(pedidoEntity);
		 email.enviarEmail(pedidoEntity.getCliente().getEmail(), "Pedido realizado com sucesso",
			 pedidoEntity.toString());
		return PedidoDto.toDto(pedidoEntity);
	}

	public void verificarProduto(Long id, ItemPedido itemPedido) {

		Optional<Produto> produtoExistente = produtoRepository.findById(id);

		if (produtoExistente.isPresent()) {
			Produto produto = produtoExistente.get();
			itemPedido.setPrecoVenda(produto.getValorUnitario() * 2);
			itemPedido.setValorBruto(itemPedido.getPrecoVenda() * itemPedido.getQuantidade());
			itemPedido.setValorDesconto(calcularValorDesconto(itemPedido));
			itemPedido.setValorLiquido(itemPedido.getValorBruto() - itemPedido.getValorDesconto());
		}

	}

	public double calcularValorDesconto(ItemPedido itemPedido) {
		return itemPedido.getValorBruto() * (itemPedido.getPercentualDesconto() / 100.0);
	}

//	public void verificarCliente(String nome,Pedido pedido) {
//		Optional<Cliente> produtoExistente = clienteRepository.findByNomeIgnoreCase(nome);
//		if (produtoExistente.isPresent()) {
//			pedido.setCliente(produtoExistente.get());
//			
//		}
//		
//	}
	public void verificarCliente(String nome, Pedido pedido) {
	    Cliente cliente = clienteRepository.findByNomeIgnoreCase(nome)
	        .orElseThrow(() -> new RuntimeException("Cliente com nome " + nome + " não encontrado."));
	    
	    pedido.setCliente(cliente);
	}
	public Optional<PedidoDto> alterarPedido(Long id, PedidoDto pedidoDto) {
		return pedidoRepository.findById(id).map(pedidoExistente -> {
			Pedido pedido = pedidoDto.toEntity();
			pedido.setId(id);
			// enderecoUtil.processarEndereco(pedidoDto.cliente(), pedido.getCliente());
//			for (ItemPedido item : pedido.getItemPedido()) {
//				Produto produtoVerificado = verificarProduto(item.getProduto());
//				item.setProduto(produtoVerificado);
//				item.calcularValores();
//			}
			pedido.setValorTotal(pedidoDto.valorTd(pedido));
			pedidoRepository.save(pedido);
			return PedidoDto.toDto(pedido);
		});
	}

	public boolean apagarPedido(Long id) {
		if (pedidoRepository.existsById(id)) {
			pedidoRepository.deleteById(id);
			return true;
		}
		return false;
	}
}