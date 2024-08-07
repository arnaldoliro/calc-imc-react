import { ChangeEvent, useState } from "react"
import styles from "./Form.module.css"

const Form = () => {
    
    const [altura, setAltura] = useState<number>(0)
    const [peso, setPeso] = useState<number>(0)
    const [imc, setImc] = useState<number>(0)
    const [categoria, setCategoria] = useState<string>("")

    const handleAlturaChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAltura(Number(event.target.value))
    }

    const handlePesoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPeso(Number(event.target.value))
    }

    const calcImc = () => {
        if(altura > 0 && peso > 0) {
            const resultadoIMC = peso / (altura * altura)
            setImc(resultadoIMC)

                if(resultadoIMC < 18.5) {
                    setCategoria('Baixo Peso')
                }
                else if(resultadoIMC >= 18.5 && resultadoIMC < 24.9){
                    setCategoria('Intervalo normal')
                }
                else if(resultadoIMC >= 24.9 && resultadoIMC < 29.9){
                    setCategoria('Sobrepeso')
                }
                else if(resultadoIMC >= 29.9 && resultadoIMC < 34.9){
                    setCategoria('Obesidade Nivel I')
                }
                else if(resultadoIMC >= 35.9 && resultadoIMC < 39.9){
                    setCategoria('Obesidade Nivel II')
                }
                else if(resultadoIMC >= 39.9){
                    setCategoria('Obesidade Nivel III')
                }
        }
    }

    return (
        <>
        <h1 className={styles.title}>Calculadora de IMC</h1>
        <form className={styles.form} onSubmit={(e) => {e.preventDefault(); calcImc();}}>
            <h4>Insira sua altura:</h4>
            <input type="number" placeholder="Digite a sua altura" value={altura} onChange={handleAlturaChange} />
            <h4>Insira seu peso:</h4>
            <input type="number" placeholder="Digite o seu peso" value={peso} onChange={handlePesoChange} />
            <button type="submit">Calcular IMC</button>
        </form>
        {imc !== null && (
            <h4 className={styles.imc}>Seu IMC é {imc.toFixed(2)} e está categorizado como {categoria} </h4>
            )}
        </>
    )
}

export default Form