import styles from './Input.module.css'
import PropTypes from 'prop-types';

export function InputText({ texto, placeholder, value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                />
            </div>
        </>
    );
};

export function InputNumb({ texto, placeholder, mask, value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="text" 
                    mask={mask}
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                />
            </div>
        </>
    );
};

export function InputSenha({texto, placeholder, value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label  className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="password" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange}
                />
            </div> 
        </>
    );
};

export function InputEmail({ texto, placeholder, value, onChange }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input}
                    type="email" 
                    placeholder={placeholder}
                    value={value} 
                    onChange={onChange} 
                />
            </div>
        </>
    );
};

export function InputDate({ texto, value, mask, onChange, placeholder }) {
    return (
        <>
            <div className={styles.containerInput}>
                <label className={styles.label}>{texto}</label>
                <input 
                    className={styles.input} 
                    type="date"
                    mask ={mask}
                    placeholder={placeholder}
                    value={value} 
                    onChange={onChange} 
                />
            </div>
        </>
    );
};
export function SelectCategoria({ texto, value, handleChange }) {
    return (
        <>
            <div className={styles.conteinerInput}>
                <label className={styles.label}>{texto}</label>
                <select className={styles.input} value={value} onChange={handleChange}>
                    <option value="...">...</option>
                    <option value="CERVEJA">CERVEJA</option>
                    <option value="DESTILADOS">DESTILADOS</option>
                    <option value="VINHOS">VINHOS</option>
                    <option value="NAO_ALCOOLICOS">NAO ALCOOLICOS</option>
                    <option value="AGUAS_E_GELO">AGUAS E GELO</option>
                    <option value="DRINKS_PRONTOS">DRINKS PRONTOS</option>
                </select>
            </div>
        </>
    );
};

InputText.propTypes = {
    texto: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

InputNumb.propTypes = {
    texto: PropTypes.string,
    placeholder: PropTypes.string,
    mask: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

InputDate.propTypes = {
    texto: PropTypes.string,
    value: PropTypes.string.isRequired,
    mask: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

InputSenha.propTypes = {
    texto: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

InputEmail.propTypes = {
    texto: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

SelectCategoria.propTypes = {
    texto: PropTypes.string,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
};