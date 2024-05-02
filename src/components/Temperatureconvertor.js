import {useState} from 'react'

function Temperatureconvertor() {

  const [Display, setDisplay] = useState(false)
  const [Temp, setTemp] = useState(0)

  const handlebtn = () => {
    setDisplay(true)
  }
  const inputTemp = (e) => {
    setTemp(parseFloat(e.target.value))
  }
  const fernTemp = (celcious) => {
    return (parseFloat(celcious * 9/5 + 32))
  }
  const kelvinTemp = (celcious) => {
    return (parseFloat(celcious + 273.15))
  }


  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>
        Temperatue Convertor
      </h1>
      <label className='flex justify-center mt-40 text-2xl font-medium'>
        Temperature In: <input type="number" onChange={inputTemp} className='w-[10vw] border border-solid border-black mx-2 text-lg p-[0.5%]' /> 
        &deg;C
      </label>
      <div className='flex justify-center mt-5'>
        <button onClick={handlebtn} className='bg-black text-2xl font-bold text-lime-400 rounded-2xl p-[1%]'>
          Convert
        </button>
      </div>
      {Display && <h2 className='flex justify-center text-2xl font-medium mt-5'>
        {Temp}&deg;C is equal to {fernTemp(Temp)}&deg;F and {kelvinTemp(Temp)}K
        </h2>
      }
    </div>
  );
}

export default Temperatureconvertor;
