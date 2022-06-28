import './Calculator.css';
import { evaluate, format } from 'mathjs'
import React, { useEffect, useState } from 'react';

function Calculator() {

  const [operationLog, setOperationLog] = useState('');

  const [result, setResult] = useState(0);

  const SYMBOLS = ['*', '-', '/', '+', '.'];

  useEffect(() => {

    if (!SYMBOLS.includes(operationLog[operationLog.length - 1]) && operationLog) {
      setResult(format(evaluate(operationLog), {upperExp:10,notation:'auto' }))
    }
  }, [operationLog]);

  function clearAll() {
    setOperationLog('');
  }

  function calculate() {
    setResult(evaluate(operationLog))
  }

  function updateDisplay(value) {
    //PREVENT FROM TYPING ['*','/'] AT BEGINNING.
    if (operationLog.length == 0 && ['*', '/'].includes(value)) {
      return;
    }
    //PREVENT IF CURRENT VALUE IS A SYMBOL & PREVIOSLY TYPED VALUE IS ALSO A SYMBOL.
    if (SYMBOLS.includes(value) && SYMBOLS.includes(operationLog[operationLog.length - 1])) {
      return;
    }

    let val = operationLog + value;
    setOperationLog(val)
  }

  function clearLastCharacter() {
    let str = operationLog.slice(0, -1)
    setOperationLog(str);
  }

  return (
    <div className="calculator">
      <div className='display'>
        <div className='operations-log'>{operationLog}</div>
        <div className='results'>{result}</div>
      </div>

      <button className='button' onClick={() => { clearAll() }}>C</button>
      <button className='button' onClick={() => { updateDisplay('%') }}>%</button>
      <button className='button' onClick={() => { clearLastCharacter() }}>CE</button>
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