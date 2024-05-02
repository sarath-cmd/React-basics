import {useState} from 'react'

function Localstorage() {

  const [Value, setValue] = useState(localStorage.getItem('inputValue'))
  const [Display, setDisplay] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    localStorage.setItem('inputValue', Value)
    setDisplay(true)
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>
        The given input is stored in your local storage
      </h1>
      <label className='flex justify-center mt-40 text-2xl font-semibold '>
        Input value to store:
        <br />
        <input type="text" onChange={(e) => {handleChange(e)}} value={Value} className='border-solid border border-black w-[10vw] p-[0.5%] text-lg font-medium rounded-2xl ml-5'/>
      </label>
      <div className='flex justify-center'>
        <button onClick={handleSubmit} className='bg-black text-2xl text-lime-400 font-semibold p-[1%] mt-5 rounded-2xl'>
          Submit
        </button>
      </div>
      {Display && (
        <h2 className='flex justify-center text-xl font-medium mt-5'>The value: {Value} is stored successfully </h2>)
      }
    </div>
  );
}

export default Localstorage;
