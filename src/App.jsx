import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState(""); 
  const [resultado, setResultado] = useState(""); 

  const clickBoton = (valor) => { setInput(input + valor); };
  const borrarTodo = () => { setInput(""); setResultado(""); };
  
  const calcular = () => {
    try {
      const res = eval(input); 
      setResultado(res);
    } catch (error) {
      setResultado("Error");
    }
  };

  return (
    <div style={styles.contenedor}>
      <div style={styles.calculadora}>
        
        <div style={styles.pantalla}>
          <div style={styles.operacion}>{input || "0"}</div>
          <div style={styles.resultado}>{resultado}</div>
        </div>

        <div style={styles.gridBotones}>
          <button onClick={borrarTodo} style={{...styles.boton, ...styles.botonClear}}>C</button>
          <button onClick={() => clickBoton("/")} style={styles.botonOp}>/</button>
          <button onClick={() => clickBoton("*")} style={styles.botonOp}>*</button>
          <button onClick={() => clickBoton("-")} style={styles.botonOp}>-</button>
          
          <button onClick={() => clickBoton("7")} style={styles.boton}>7</button>
          <button onClick={() => clickBoton("8")} style={styles.boton}>8</button>
          <button onClick={() => clickBoton("9")} style={styles.boton}>9</button>
          <button onClick={() => clickBoton("+")} style={styles.botonOp}>+</button>

          <button onClick={() => clickBoton("4")} style={styles.boton}>4</button>
          <button onClick={() => clickBoton("5")} style={styles.boton}>5</button>
          <button onClick={() => clickBoton("6")} style={styles.boton}>6</button>
          
          <button onClick={calcular} style={{...styles.boton, ...styles.botonIgual}}>=</button>

          <button onClick={() => clickBoton("1")} style={styles.boton}>1</button>
          <button onClick={() => clickBoton("2")} style={styles.boton}>2</button>
          <button onClick={() => clickBoton("3")} style={styles.boton}>3</button>

          <button onClick={() => clickBoton("0")} style={{...styles.boton, gridColumn: "span 2"}}>0</button>
          <button onClick={() => clickBoton(".")} style={styles.boton}>.</button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  contenedor: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'Arial, sans-serif' },
  calculadora: { width: '300px', padding: '20px', borderRadius: '10px', backgroundColor: '#333', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' },
  pantalla: { backgroundColor: '#222', padding: '15px', borderRadius: '5px', marginBottom: '15px', textAlign: 'right', minHeight: '60px' },
  operacion: { color: '#aaa', fontSize: '18px', overflow: 'hidden', whiteSpace: 'nowrap' },
  resultado: { color: '#fff', fontSize: '28px', fontWeight: 'bold', marginTop: '5px', overflow: 'hidden', whiteSpace: 'nowrap' },
  gridBotones: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' },
  boton: { padding: '15px', fontSize: '18px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#e0e0e0', fontWeight: 'bold' },
  botonOp: { padding: '15px', fontSize: '18px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#ff9500', color: '#fff', fontWeight: 'bold' },
  botonClear: { backgroundColor: '#ff3b30', color: '#fff' },
  botonIgual: { backgroundColor: '#34c759', color: '#fff', gridRow: 'span 2', height: '100%' }
};

export default App;