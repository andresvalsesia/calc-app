import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './componentes/Functions'
import Numbers from './componentes/Numbers'
import MathOperations from './componentes/MathOperations'
import Result from './componentes/Result'
import './App.css'


// Función Flecha o Arrow Function
const App = () => {
    // Array Destructuring
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // 2da posición: función que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("")

    const items= words(stack,/[^-^+^*^/]+/g) 
    //libreria que permite guardar los numeros en un array, sin simbolos
    
    const value= items.length>0 
    ? items[items.length-1]  
    : "0";



    // Lo que ejecuta la función
    console.log("Renderización de App", value)
    return (
    <main className='react-calculator'>
        <Result value={value} />
        <Numbers onClickNumber={number => {
            
            setStack(`${stack}${number}`)  
        }} />
        <Functions 
            onContentClear={() => {
               
                setStack('')
            }}
            onDelete={() => {
                if (stack.length>0) {

                   
                    const newStack=stack.substring(0,stack.length-1) //borro el ultimo caracter
                    setStack(newStack)
                    
                }
               
            }}
        />
        <MathOperations 
            onClickOperation={operation =>{
               
                setStack(`${stack}${operation}`)
            }} 
            onClickEqual={equal => {
                
                setStack(eval(stack).toString())    //EVAL hace la cuenta sola
            }}
        />
    </main>)
}

export default App

