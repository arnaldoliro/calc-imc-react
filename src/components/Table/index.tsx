import styles from "./Table.module.css"

const Table = () => {

    return(
        <>
        <h2 className={styles.title}>Tabela de classificação:</h2>
        <ul className={styles.ul}>
            <li>
                <h4>menor que 18,5 - baixo peso</h4>
            </li>
            <li>
                <h4>entre 18,5 e 24,9 - intervalo normal</h4>
            </li>
            <li>
                <h4>entre 25 e 29,9 - sobrepeso</h4>
            </li>
            <li>
                <h4>entre 30 e 34,9 - obesidade classe I</h4>
            </li>
            <li>
                <h4>entre 35 e 39,9	- obesidade classe II</h4>
            </li>
            <li>
                <h4>maior que 40 - obesidade classe III</h4>
            </li>
        </ul>
        </>
    )
}

export default Table