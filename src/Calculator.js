
import './Calculator.css';
import React, { useEffect, useState } from 'react';

function Calculator() {
  const [operationLog,setOperationLog]=useState('12*4-3'); 
  const [result,setResult]=useState(0); 

  useEffect(() => {
    setResult(new Function('return ' + operationLog)())
  },[]);

  return (
    <div className="calculator">
      <div className='display'>
        <div className='operations-log'>{operationLog}</div>
        <div className='results'>{result}</div>
      </div>

      <button className='button'>C</button>
      <button className='button'>%</button>
      <button className='button'>CE</button>
      <button className='button'>/</button>

      <button className='button' onClick={() => setOperationLog(operationLog + '7')}>7</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '8')}>8</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '9')}>9</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '*')}>*</button>

      <button className='button' onClick={() => setOperationLog(operationLog + '4')}>4</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '5')}>5</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '6')}>6</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '-')}>-</button>

      <button className='button' onClick={() => setOperationLog(operationLog + '1')}>1</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '2')}>2</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '3')}>3</button>
      <button className='button' onClick={() => setOperationLog(operationLog + '+')}>+</button>

      <button className='button' onClick={() => setOperationLog(operationLog + '0')}>0</button>
      <button className='button'>.</button>
      <button className='button'>=</button>      
      <button className='button'>C</button>

    </div>
  );
}

export default Calculator;