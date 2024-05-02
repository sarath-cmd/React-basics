import {useState} from 'react'

function Enableanddisablebtn() {

  const [Value, setValue] = useState('')
  const [Display, setDisplay] = useState(true)
  const [SuccessDisp, setSuccessDisp] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleClick = () => {
    setDisplay(false)
    setSuccessDisp(true)
  }

  return (
    <section>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>
        Button Enable and Disable based on the Input
      </h1>
      <br />
      <div className='flex justify-center mt-40'>
        <input type="text" placeHolder="Enter value" onChange={handleChange} className='border-solid border-black border mr-5 p-[1%]'/>
        <button disabled={Value.length < 3} onClick={handleClick} className='bg-black text-2xl font-bold text-lime-400 p-[1%] rounded-2xl'>
          Click
        </button>
      </div>
      {Display && <p className='flex justify-center text-2xl font-semibold mt-10'>The click works when the length is greater than 3</p>}
      {SuccessDisp && <p className='flex justify-center text-2xl font-semibold mt-10'>The click has worked</p>}
    </section>
  );
}

export default Enableanddisablebtn;