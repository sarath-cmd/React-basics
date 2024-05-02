import {useState} from 'react'

function Lightanddarktheme() {
  const [theme, settheme] = useState('light')
  const handletheme = () => {
    settheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div style={{backgroundColor: theme === 'light' ? 'White' :'black'}} className='scroll-none h-[100vh]'>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>
        Toggle Light and Dark Mode
      </h1>
      <button onClick={handletheme} style={{backgroundColor: theme === 'light' ? 'black' :'gray'}} className='mt-52 mx-[42vw] bg-black text-2xl font-bold text-lime-400 p-[1%] rounded-2xl'>
        Toggle Button
      </button>
    </div>
  );
}

export default Lightanddarktheme;
