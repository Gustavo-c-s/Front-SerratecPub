
import style from './Botao.module.css'

export function Botao({handleClick,texto}){

    return(
        <>
            <button className={style.bnt} onClick={handleClick}>
                {texto}
            </button>
        </>
    )
}