import '../styles/Progressbar.css'
import {useState} from 'react'

function Progressbar() {

  const [Value, setValue] = useState(0)

  const updateValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>Progress Bar</h1>
      <progress value={Value / 100}>{Value}</progress>
      <div className='flex justify-center mt-10'>
        <label className='text-2xl font-semibold'>Input Percentage: </label>
        <input type='number' onChange={(e) => updateValue(e)} placeholder='value' className='w-[5%] border-solid border-black border rounded-full p-[0.5%]'></input>
      </div>
    </div>
  );
}

export default Progressbar;