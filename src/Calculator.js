
import './Calculator.css';
import React, { useEffect, useState } from 'react';
import { evaluate,format } from 'mathjs'

function Calculator() {
  const [operationLog, setOperationLog] = useState('');
  const [result, setResult] = useState(0);
  const SYMBOLS=['*', '-', '/', '+','.'];

  function updateDisplay(value) {

    if (SYMBOLS.includes(value) && SYMBOLS.includes(operationLog[operationLog.length-1])) {
      return;
    }
    let val = operationLog + value;
    setOperationLog(val)
    if (!SYMBOLS.includes(value)) {
      setResult(evaluate(val))
    }
  }

  function calculate() {
    setResult(evaluate(operationLog))
  }

  function clearAll() {
    setOperationLog('');
    setResult(0)
  }

  function clearLastChar(){
    let str=operationLog.slice(0, -1)
    setOperationLog(str);    
    if (!SYMBOLS.includes(str[str.length-1])) {
      setResult(evaluate(str))
    }
  }

  return (
    <div className="calculator">
      <div className='display'>
        <div className='operations-log'>{operationLog}</div>
        <div className='results'>{result}</div>
      </div>

      <button className='button' onClick={() => { clearAll() }}>C</button>
      <button className='button' onClick={() => { updateDisplay('%') }}>%</button>
      <button className='button' onClick={() => { clearLastChar() }}>CE</button>
      <button className='button' onClick={() => { updateDisplay('/') }}>/</button>

      <button className='button' onClick={() => { updateDisplay('7') }}>7</button>
      <button className='button' onClick={() => { updateDisplay('8') }}>8</button>
      <button className='button' onClick={() => { updateDisplay('9') }}>9</button>
      <button className='button' onClick={() => { updateDisplay('*') }}>*</button>

      <button className='button' onClick={() => { updateDisplay('4') }}>4</button>
      <button className='button' onClick={() => { updateDisplay('5') }}>5</button>
      <button className='button' onClick={() => { updateDisplay('6') }}>6</button>
      <button className='button' onClick={() => { updateDisplay('-') }}>-</button>

      <button className='button' onClick={() => { updateDisplay('1') }}>1</button>
      <button className='button' onClick={() => { updateDisplay('2') }}>2</button>
      <button className='button' onClick={() => { updateDisplay('3') }}>3</button>
      <button className='button' onClick={() => { updateDisplay('+') }}>+</button>

      <button className='button' onClick={() => { updateDisplay('0') }}>0</button>
      <button className='button' onClick={() => { updateDisplay('.') }}>.</button>
      <button className='button' onClick={() => { calculate() }}>=</button>
      <button className='button' onClick={() => { clearAll() }}>C</button>

    </div>
  );
}

export default Calculator;