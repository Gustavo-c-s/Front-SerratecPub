import styles from "./Card.module.css"

export function Card({ index,nome,cpf,email,telefone,dataNascimento ,handleRemover}) {

    return (
        <>
            <div className={styles.corpo}>
                <div className={styles.corpo2}>
                    <h2 className={styles.titulo}>{nome}</h2>
                    <p className={styles.subtitulo}>{cpf}</p>
                    <p className={styles.subtitulo}>{email}</p>
                    <p className={styles.subtitulo}>{telefone}</p>
                    <p className={styles.subtitulo}>{dataNascimento}</p>
                    <button onClick={() => handleRemover(index)}> Remover </button>
                </div>
            </div>
        </>
    )

}