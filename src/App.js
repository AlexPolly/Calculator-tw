import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [Number , setNumber] = useState('')


  
  const handleKeyPress = (event) => {
    const keyValue = event.key;

    // Check if the pressed key is a valid number, operator, or special key
    if (!isNaN(keyValue) || keyValue === '.' || ['+', '-', '*', '/'].includes(keyValue)) {
      setNumber((prevNumber) => prevNumber.concat(keyValue));
    } else if (event.key === 'Enter') {
      handleAnswer();
    } else if (event.key === 'Backspace') {
      handleSlice();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); 

  const handleClick = (e)=>{
    setNumber(Number.concat(e.target.value))
  }

  const handleClear = ()=>{
    setNumber('')
  }

  const handleSlice = ()=>{
    setNumber(Number.slice(0, -1))
  }

  const handleAnswer = ()=>{
    try{
      setNumber(eval(Number).toString())
    }catch(error){
      setNumber('InValid Expression!!!')
    }


    
  }
  return (
    <div className="bg-gray-900 w-48 sm:w-1/2 md:w-1/3 mx-auto rounded-lg overflow-hidden mt-10">
      <div className='mt-5 mb-4 text-center'>
      <h7 className='text-gray-200 font-bold text-5xl w-full font-serif hover:text-lime-300' >Calculator</h7> 
      </div> <hr className='mb-8' />
      {/* display */}
      <div className='p-3 px-8'>
        <input type="text" value={Number} placeholder='0' className='w-full  rounded-lg h-16 text-3xl text-black px-2 text-right' />
      </div>
      {/* buttons */}
      <div className='grid grid-cols-4 gap-3 mt-5 mb-10  ml-12'>
        <button  onClick={handleClear} className='text-black bg-lime-300 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> AC</button>
        <button  onClick={handleSlice} className='text-black bg-cyan-100 hover:bg-gray-400 w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> C</button>
        <button value='/' onClick={handleClick} className='text-black   bg-cyan-100 hover:bg-gray-400  w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> /</button>
        <button value='+' onClick={handleClick} className='text-black  bg-cyan-100 hover:bg-gray-400  w-16 h-41 justify-center items-center font-bold shadow rounded-lg text-2xl row-span-2'> +</button>

        <button value='9' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 9</button>
        <button value='8' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 8</button>
        <button value='7' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 7</button>
        <button value='4' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 4</button>

        <button value='5' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 5</button>
        <button value='6' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 6</button>
        <button value='-' onClick={handleClick} className='text-black  bg-cyan-100 hover:bg-gray-400  w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> -</button>
        <button value='1' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 1</button>

        <button value='2' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 2</button>
        <button value='3' onClick={handleClick} className='text-black bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 3</button>
        <button value='*' onClick={handleClick} className='text-black  bg-cyan-100 hover:bg-gray-400  w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> *</button>
        <button value='0' onClick={handleClick} className='text-black  bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> 0</button>

        <button value='.' onClick={handleClick} className='text-black  bg-gray-50 hover:bg-gray-400 hover:text-white w-16 h-16 justify-center items-center font-bold shadow rounded-lg text-2xl '> .</button>
        <button  onClick={handleAnswer} className='text-black  bg-lime-300 hover:bg-gray-400 hover:text-white w-full sm:w-44   ml-3  h-16 justify-center items-center font-bold shadow rounded-lg text-2xl col-span-2'> =</button>
      </div>
    </div>
  );
}

export default App;
