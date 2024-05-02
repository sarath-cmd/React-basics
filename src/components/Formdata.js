import { useState } from 'react';

function Formdata() {

  const [UserName, setUserName] = useState("")
  const [FullName, setFullName] = useState("")
  const [Age, setAge] = useState("")
  const [Display, setDisplay] = useState(false)

  const updateUserName = (e) => {
    setUserName(e.target.value)
  }
  const updateName = (e) => {
    setFullName(e.target.value)
  }
  const updateAge = (e) => {
    setAge(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true)
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>To Display Form Data</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label className='flex justify-center font-medium text-xl'>UserName :
          <input type="text" onChange={(e) => {updateUserName(e)}} required className='border-solid border-black border ml-[0.5%] p-[0.5%] text-base font-normal'/>
        </label>
        <br />

        <label className='flex justify-center font-medium text-xl'>FullName :
          <input type="text" onChange={(e) => {updateName(e)}} required className='border-solid border-black border ml-[0.5%] p-[0.5%] text-base font-normal'/>
        </label>
        <br />

        <label className='flex justify-center font-medium text-xl'>Age :
          <input type="number" onChange={(e) => {updateAge(e)}} required className='border-solid border-black border ml-[0.5%] p-[0.5%] text-base font-normal'/>
        </label>
        <br />

        <button className='bg-black text-lg font-semibold text-lime-400 p-[0.5%] rounded-2xl mx-[47vw]'>Submit</button>
        <br /><br />

        { Display && (
          <>
            <h1 className='flex justify-center text-xl font-bold bg-black text-lime-400 p-[0.5%]'>The form will be submited with the following data</h1>
            <br />
            <ul>
              <li className='flex justify-center font-semibold'>User Name : {UserName.toUpperCase()}</li>
              <br />
              <li className='flex justify-center font-semibold'>Full Name : {FullName.toUpperCase()}</li>
              <br />
              <li className='flex justify-center font-semibold'>User Age : {Age.toUpperCase()}</li>
              <br />
            </ul>
          </>
        )}
      </form>
    </div>
  );
}

export default Formdata;
