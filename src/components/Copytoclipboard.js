import {useState} from 'react'

function Copytoclipboard() {

  const [copied, setcopied] = useState(false)

  const handlecopy = () => {
    navigator.clipboard.writeText("The text is Copied to the Clip Board")
    setcopied(true)
    setTimeout(() => {
      setcopied(false)
    }, 2000);
  } 

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>
        Copy to Clip Board
      </h1>
      <button onClick={handlecopy} className='bg-black text-2xl font-extrabold text-lime-400 rounded-2xl p-[1%] mt-52 mx-[45vw]'>
        {copied ? 'copied' : 'copy'}
      </button>
    </div>
  );
}

export default Copytoclipboard;
