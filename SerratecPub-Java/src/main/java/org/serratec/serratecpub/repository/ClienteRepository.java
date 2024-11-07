package org.serratec.serratecpub.repository;

import java.util.List;
import java.util.Optional;

import org.serratec.serratecpub.dto.ClienteDto;
import org.serratec.serratecpub.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
  
	@Query("SELECT c FROM Cliente c "
			+ "WHERE TRANSLATE(c.nome, "
			+ "'ÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇáàãâäéèêëíìîïóòõôöúùûüç',"
			+ " 'AAAAAEEEEIIIIOOOOOUUUUCaaaaaeeeeiiiiooooouuuuc') "
			+ "ILIKE CONCAT('%', TRANSLATE(:nome, "
			+ "'ÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇáàãâäéèêëíìîïóòõôöúùûüç', "
			+ "'AAAAAEEEEIIIIOOOOOUUUUCaaaaaeeeeiiiiooooouuuuc'), '%')")
	List<Cliente> BuscarClientePorNome(String nome);
	
	List<Cliente> findByCpf(String cpf);
	
	Optional<Cliente> findByEmailAndSenha(String email, String senha);

	Optional<Cliente> findByNomeIgnoreCase(String nome);
}